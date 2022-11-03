import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDetailsComponent } from './update-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

const routes: Routes = [


  { path: '', component: UpdateDetailsComponent },
];

@NgModule({
  declarations: [UpdateDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),NzButtonModule,FormsModule],
  exports: [RouterModule],
})
export class UpdateDetailsModule { }
