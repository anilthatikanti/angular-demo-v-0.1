import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(public route:Router) { }

  checkIsUser(){
    let user = localStorage.getItem("userAuth");
    let userAuthentication = user!==null?JSON.parse(user):false;
    let changeStatus = !userAuthentication
    localStorage.setItem("userAuth",JSON.stringify(changeStatus))
    return changeStatus
  }
}
