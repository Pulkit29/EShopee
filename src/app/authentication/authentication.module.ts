import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './email-login/email-login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthComponent, SignupComponent, EmailLoginComponent, LoginComponent],
  exports: []
})
export class AuthenticationModule { }
