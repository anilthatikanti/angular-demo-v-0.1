import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from 'src/services/operation-service/operation.service';
import {CheckLoginService} from "src/services/logincheck-service/check-login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginCheck: OperationService,public route:Router,public checkLogin:CheckLoginService) {

   }

  ngOnInit(): void {
    let check = this.checkLogin.checkIn()
    if(check){
      this.route.navigate(["home"])
    }
  }
login(){
  let status = this.loginCheck.checkIsUser()
  if(status){
  this.route.navigate(["home"])
  }
}
}

