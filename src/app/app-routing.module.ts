import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginComponent } from 'src/module/login/login.component';
import { CheckLoginService } from 'src/services/logincheck-service/check-login.service';
import { LoginService } from '../services/login-service/login.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'add-student',
    loadChildren: () =>
      import('../module/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoginService],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../module/login/login.module').then((m) => m.LoginModule),
    canActivate: [CheckLoginService],
  },
  {
    path: 'user-details/:id',
    loadChildren: () =>
      import('../module/update-details/update-details.module').then(
        (m) => m.UpdateDetailsModule
      ),
    canActivate: [LoginService],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../module/student-list/student-list.module').then(
        (m) => m.StudentListModule
      ),
    canActivate: [LoginService],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
