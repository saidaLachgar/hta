import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { AuthenticationService } from "../services/auth.service";
import { catchError, switchMap } from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Exclude the refresh-token endpoint from interception
    if (request.url.includes("token/refresh")) {
      return next.handle(request);
    }

    if (this.authService.isTokenExpired()) {
      return this.authService.refreshToken().pipe(
        switchMap(() => {
          request = this.addAuthorizationHeader(request);
          return next.handle(request);
        }),
        catchError((error) => {
          this.authService.logout(); // Handle refresh token failure (e.g., redirect to login page)
          return throwError(error);
        })
      );
    }
    request = this.addAuthorizationHeader(request);
    return next.handle(request);
  }

  private addAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
    const currentUser = this.authService.user;
    // add authorization header with jwt token if available
    if (currentUser && currentUser.jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwt.token}`,
          // ...(req.method === "PATCH" && {'Content-Type': 'application/merge-patch+json'})
          // 'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/ld+json; charset=utf-8',
          Accept: 'application/ld+json'
        },
      });
    }
    // removes trailing slashes
    if (request.url.includes("/api/") && request.url.endsWith("/")) {
      request = request.clone({ url: request.url.replace(/\/$/, "") });
    }
    return request;
  }
}
