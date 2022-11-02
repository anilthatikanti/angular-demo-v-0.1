import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from 'src/services/operation-service/operation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public loginCheck: OperationService, public route: Router) {}

  ngOnInit(): void {}
  login() {
    let status = this.loginCheck.checkIsUser();
    console.log(status);
    if (status) {
      this.route.navigate(['dashboard']);
    }
  }
}
