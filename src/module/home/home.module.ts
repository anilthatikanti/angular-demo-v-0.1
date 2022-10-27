import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import {HomeComponent} from './home.component'

const routes: Routes = [
  {path:"",component:HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeModule { }