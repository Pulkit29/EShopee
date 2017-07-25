import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './email-login/email-login.component';

const routes: Routes = [
            	{
                	path: '',
                	redirectTo: '/login',
                	pathMatch : 'full'
            	},
            	{
                	path: 'login',
                	component: 'LoginComponent'
            	},
            	{
                	path: 'signup',
                	component: 'SignupComponent'
            	},
            	{
                	path: 'email-login',
                	component: 'EmailLoginComponent'
            	}
       		 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
