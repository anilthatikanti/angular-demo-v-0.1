import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../module/login/login.component';
import { HomeComponent } from '../module/home/home.component';
import { UpdateDetailsComponent } from '../module/update-details/update-details.component';
import { FormsModule } from '@angular/forms';
import { ModifyService } from '../services/modify-service/modify.service';
import { LoginService } from '../services/login-service/login.service';
import { OperationService } from '../services/operation-service/operation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ModifyService,LoginService,OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
