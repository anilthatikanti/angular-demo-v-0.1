import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateDetailsComponent} from './update-details.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:"",component:UpdateDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class UpdateDetailsModule { }
