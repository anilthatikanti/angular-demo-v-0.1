import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{
  constructor(public router:Router) {}
  
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    let isUser=localStorage.getItem("userAuth");
    let userAuthentication = isUser!==null?JSON.parse(isUser):false;
    if(userAuthentication){
      return true
    }else{
    this.router.navigate(["login"])
      return false
    }
}

  }
