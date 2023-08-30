import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthenticationService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let authorized = this.authService.isAuthorized(route.data.access);
        if(authorized) return true;
        alert("accès refusé");
        this.router.navigate(['/dashboard']);
        return false;
    }
}
