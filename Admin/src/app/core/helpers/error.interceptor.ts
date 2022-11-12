import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let error = err.error.message || err.statusText;
            if (err.status === 401 || err.status === 403) {
                // auto logout if 401 response returned from api
                if(error == "JWT Token not found") {
                    this.authenticationService.logout();
                    location.reload();
                }
                // auto refresh user token when unauthorized ( Expired JWT Token (24h) )
                else {
                    this.authenticationService.refreshToken()
                      .subscribe({
                          error: (error) => {
                            error = error;
                            this.authenticationService.logout();
                            location.reload();
                        },
                        complete: () => location.reload(),
                    })
                }
            }
            console.error(error);
            return throwError(error);
        }));
    }
}
