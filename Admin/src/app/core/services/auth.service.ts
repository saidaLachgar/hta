import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    private server = environment.serverURL;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public getToken(): string | undefined {
        return this.currentUserValue.token;
    }
    public notAuthenticated(): boolean {
        const token = this.getToken(); // get the token
        if(token===undefined) return true;
        // return a boolean reflecting  whether or not the token is expired
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry; // check if JWT token is expired
      }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.server}/api/login`, { username, password })
            .pipe(map(token => {
                // login successful if there's a jwt token in the response
                let user: User = {
                    username: username,
                    token: token,
                };
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
                  return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

