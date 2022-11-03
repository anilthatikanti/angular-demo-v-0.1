import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {StudentListComponent} from './student-list.component'
import { RouterModule, Routes } from '@angular/router';
import { UpdateDetailsComponent } from '../update-details/update-details.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

const routes:Routes = [
  {path:"",component:StudentListComponent}
]

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzButtonModule
  ],
  exports:[RouterModule]
})
export class StudentListModule { }
