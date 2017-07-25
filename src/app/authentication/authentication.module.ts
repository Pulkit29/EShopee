import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './email-login/email-login.component';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [SignupComponent, EmailLoginComponent, LoginComponent],
  exports: []
})
export class AuthenticationModule { }
