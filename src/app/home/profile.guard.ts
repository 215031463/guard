import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = sessionStorage.getItem('token');
    if (token && token.trim().length > 0) {
      return Observable.of(true);
    } else {
      this.router.navigateByUrl('/auth-error');
      return Observable.of(false);
    }
  }
}
