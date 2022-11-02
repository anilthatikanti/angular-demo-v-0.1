import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginService implements CanActivate {
  constructor(private router: Router) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (this.checkIn()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
  checkIn() {
    let isUser = localStorage.getItem('userAuth');
    let userAuthentication = isUser !== null ? JSON.parse(isUser) : false;
    if (userAuthentication) {
      //this.route.navigate(["home"])
      return true;
    } else {
      //this.route.navigate(["login"])
      return false;
    }
  }
}
