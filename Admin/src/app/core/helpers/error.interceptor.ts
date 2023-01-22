import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let error = err.error.message || err.statusText;
            if(error == "JWT Token not found" || error == "Expired JWT Token") {
                this.authenticationService.logout();
            }
            if (error == "Forbidden" || err.status === 403){
                this.authenticationService.refreshToken()
                    .subscribe({
                        error: (error) => {
                        error = error;
                        this.authenticationService.logout();
                        this.router.navigate(['/dashboard']);
                    },
                    complete: () => location.reload(),
                })
            }
            console.trace(err);
            return throwError(error);
        }));
    }
}


// 403 -> Forbidden -> 'Acess refusé'
// 401 -> Unauthorized  -> 'Identifiants invalides', 'Expired JWT Token', "JWT Token not found"
// 404 -> not found
// 505 -> Server error