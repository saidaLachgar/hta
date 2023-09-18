import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.user;
        if (currentUser) {
            // logged in so redirect to dashboard 
            this.router.navigate(['/dashboard']);
            return false;
        }
        // not logged in so return true (allow)
        return true;
    }
}
