import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            // add authorization header with jwt token if available
            const currentUser = this.authenticationService.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
            // removes trailing slashes
            if (request.url.includes("/api/") && request.url.endsWith("/")) {
                const dupReq = request.clone({ url: request.url.replace(/\/$/, "") });
                return next.handle(dupReq);
            }
        return next.handle(request);
    }
}
