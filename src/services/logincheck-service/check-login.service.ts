import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor(private route:Router) {}
  checkIn(){
    let isUser=localStorage.getItem("userAuth");
    let userAuthentication = isUser!==null?JSON.parse(isUser):false;
    if(userAuthentication){
      //this.route.navigate(["home"])
      return true
    }else{
      //this.route.navigate(["login"])
      return false
    }
  }
}
