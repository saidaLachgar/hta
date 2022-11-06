import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthenticationService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwt.token}`,
          // ...(req.method === "PATCH" && {'Content-Type': 'application/merge-patch+json'})
          // 'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/ld+json; charset=utf-8',
          // ...(request.url.includes("getHydra") ? {'Accept': "application/ld+json"} : {'Accept': 'application/json'})
          Accept: 'application/ld+json'
        },
      });
    }
    // removes trailing slashes
    if (request.url.includes("/api/") && request.url.endsWith("/")) {
      request = request.clone({ url: request.url.replace(/\/$/, "") });
    }
    return next.handle(request);
  }
}
