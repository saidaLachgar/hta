import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { User } from "../models";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { UserPermissionsService } from "src/app/pages/UserPermissions/user-permissions.service";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private server = environment.serverURL;
  public currentUser: Observable<User>;
  roles: string[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private UserPermissionsService: UserPermissionsService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get user(): User {
    return this.currentUserSubject.value;
  }
  getToken(): any {
    return this.user && this.user.jwt;
  }
  getUserName(): string {
    return this.user.username;
  }
  decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  refreshToken() {
    return this.http
      .post<any>(`${this.server}/api/token/refresh`, {
        refresh_token: this.getToken().refresh_token,
      })
      .pipe(
        tap((result) => this.storeJWT(result, this.user.username)),
        switchMap(() => this.setPermissions(this.roles[0]))
      );
  }
  // Function to check if JWT token has expired
  isTokenExpired(): boolean {
    if (this.getToken()) {
      const expTime = this.decodeToken(this.getToken().token).exp * 1000; // Convert expiration time to milliseconds
      const currentTime = new Date().getTime(); // Get the current time in milliseconds
      if (currentTime > expTime) {
        return true; // Token has expired
      }
    }
    return false; // Token is not expired
  }

  login(username: string, password: string) {
    this.roles = [];
    return this.http
      .post<any>(`${this.server}/api/login`, { username, password })
      .pipe(
        tap((result) => this.storeJWT(result, username)),
        switchMap(() => this.setPermissions(this.roles[0]))
      );
  }

  storeJWT(jwt, username) {
    // login successful if there's a jwt token in the response
    // get user role
    const PAYLOAD = this.decodeToken(jwt.token);
    this.roles = PAYLOAD.roles;
    let user: User = {
      id: PAYLOAD.id,
      username: username,
      jwt: jwt,
      roles: this.roles,
    };
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout(redirect:boolean = true) {
    // remove user from local storage to log user out
    localStorage.clear();
    this.currentUserSubject && this.currentUserSubject.next(null);
    redirect && this.router.navigate(["account/login"]);
  }

  setPermissions(role: string) {
    return this.UserPermissionsService.getWithQuery({ role: role }).pipe(
      tap((data) =>
        localStorage.setItem("permissions", JSON.stringify(data[0]))
      )
    );
  }
  getPermissions(): string[] {
    return JSON.parse(localStorage.getItem("permissions")).permissions;
  }

  isAuthorized(access: string): boolean {
    // console.log(this.getPermissions(), access);
    return this.getPermissions().includes(access);
  }
}
