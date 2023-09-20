import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { User } from "../models";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { UserPermissionsService } from "src/app/pages/UserPermissions/user-permissions.service";
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private server = environment.serverURL;
  public currentUser: Observable<User>;
  roles: string[];

  constructor(
    private http: HttpClient,
    private router: Router,
    // private jwtHelper: JwtHelperService,
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
        switchMap(() => this.setPermissions(this.roles[0])),
        catchError((error) => {
          // Handle token refresh error here
          console.error("Token refresh error:", error);
          // You can log out the user or take other actions as needed
          this.logout(); // Example: Log out the user
          return throwError(error); // Pass the error downstream
        })
      );

      
  }
  // Function to check if JWT token has expired
  // isTokenExpired(): boolean | Promise<boolean> {
  //   // return false; // Token is not expired
  //   const tokens = this.getToken();
    
  //   if (!tokens) {
  //     return true; // Token not present, consider it expired
  //   }

  //   return this.jwtHelper.isTokenExpired(tokens.token);
  // }

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
    window.location.reload();
  }

  setPermissions(role: string) {
    return this.UserPermissionsService.getWithQuery({ role: role }).pipe(
      tap((data) =>
        localStorage.setItem("permissions", JSON.stringify(data[0]))
      )
    );
  }
  
  getPermissions(): string[] {
    // try {
      return JSON.parse(localStorage.getItem("permissions")).permissions;
    // } catch (error) {
    //   this.logout();
    // }
  }

  isAuthorized(access: string): boolean {
    // return true;
    // console.log(this.getPermissions(), access);
    let permissions = this.getPermissions();
    if(permissions) {
      return permissions.includes(access);
    } 
    return false;
  }
}
