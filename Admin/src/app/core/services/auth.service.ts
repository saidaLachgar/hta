import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from '../models';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UserPermissionsService } from 'src/app/admin/users/UserPermissions/UserPermissions.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    private server = environment.serverURL;
    public currentUser: Observable<User>;
    public readonly access = [
        {
            name: "Anomalies",
            value: "anomalies",
            permissions: -1
        },
        {
            name: 'Travaux',
            value: 'travaux',
            permissions: -1
        },

        {
            name: 'Calendrier',
            value: 'calendrier',
            permissions: 4
        },
        {
            name: 'Objectifs de l\'année',
            value: 'objectifs',
            permissions: 4
        },
        {
            name: 'Postes',
            value: 'postes',
            permissions: -1
        },
        {
            name: 'Statistiques',
            value: 'statistiques',
            permissions: 4
        },
        {
            name: 'Équipes',
            value: 'equipes',
            permissions: [0, 1, 2, 3, 4]
        },
        {
            name: 'Members',
            value: 'users',
            permissions: [0, 1, 2, 3, 4]
        },
        {
            name: 'Autorisation',
            value: 'autorisation',
            permissions: 4
        },
        {
            name: 'Historique',
            value: 'historique',
            permissions: 4
        },
        {
            name: 'Source des données',
            value: 'data',
            permissions: 4
        },
    ];

    constructor(private http: HttpClient, private router: Router, private UserPermissionsService: UserPermissionsService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    getToken(): any {
        return this.currentUserValue.jwt;
    }
    decodeToken(token: string) {
        return JSON.parse(atob(token.split('.')[1]));
    }
    refreshToken() {
        let roles: string[];
        return this.http.post<any>(`${this.server}/api/token/refresh`, { refresh_token: this.getToken().refresh_token })
            .pipe(
                tap(result => {
                    roles = this.decodeToken(result.token).roles;
                    let user: User = {
                        username: this.currentUserValue.username,
                        jwt: result,
                        roles: roles,
                    };
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }),
                switchMap(() => this.setPermissions(roles[0])),
            );
    }
    login(username: string, password: string) {
        let roles: string[];
        return this.http.post<any>(`${this.server}/api/login`, { username, password })
            .pipe(
                tap(result => {
                    // login successful if there's a jwt token in the response
                    // get user role
                    roles = this.decodeToken(result.token).roles;
                    let user: User = {
                        username: username,
                        jwt: result,
                        roles: roles,
                    };
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }),
                switchMap(() => this.setPermissions(roles[0])),
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear()
        this.currentUserSubject.next(null);
        this.router.navigate(['account/login']);
    }

    setPermissions(role:string) {
        return this.UserPermissionsService.getWithQuery({ role: role })
            .pipe(
                tap((data) => localStorage.setItem('permissions', JSON.stringify(data[0])))
            );
    }
    getPermissions(): string[] {
        return JSON.parse(localStorage.getItem("permissions")).permissions;
    }

    isAuthorized(access: string): boolean {
        return this.getPermissions().includes(access);
    }
}

