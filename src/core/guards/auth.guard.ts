import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CurrentUserDto } from '../api/service-proxies';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser: CurrentUserDto = this._authenticationService.currentUser;
    if (!currentUser) {
      this._router.navigate(['/login']);

      return false;
    }
    return true;
  }
}
