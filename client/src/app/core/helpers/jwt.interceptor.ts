import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AuthenticationService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Skip token handling for specific URLs
    if (
      ["token/refresh", "api/login"]
        .some(substring => request.url.includes(substring))
    ) {
      return next.handle(request);
    }

    request = this.addToken(request);
    return next.handle(request).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === 401
        ) {
          return this.handleTokenExpired(request, next);
        } else {
          return throwError(error);
        }
      })
    );

  }

  private addToken(request: HttpRequest<any>) {
    if (this.authService.getToken()) {
      const token = this.authService.getToken().token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/ld+json'
        },
      });
      // removes trailing slashes
      if (request.url.includes("/api/") && request.url.endsWith("/")) {
        request = request.clone({ url: request.url.replace(/\/$/, "") });
      }
    }
    return request;
  }

  private handleTokenExpired(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.refreshToken().pipe(
      switchMap(() => next.handle(this.addToken(request))),
      catchError((error) => {
        this.authService.logout(); // Handle refresh token failure (e.g., redirect to login page)
        return throwError(error);
      })
    );
  }
}