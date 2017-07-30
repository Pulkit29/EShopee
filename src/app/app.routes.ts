/*
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './coreModule/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AngularFirebaseService} from './providers/angular-firebase.service';

import { AuthenticationModule } from './authentication/authentication.module';


// Route config let's you map routes to components
const routes: Routes = [
  // map '/home' to the people list component
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'categories', component: ProductCategoriesComponent, canActivate: [AngularFirebaseService]}, //url : /
      { path: 'categories/:id', component: ProductListComponent },//url : /

      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'email-login', component: EmailLoginComponent }
    ]
  },
  
  // map '/' to '/home' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: 'app/coreModule/core.module#CoreModule'
  }
];

export const appRouterModule = RouterModule.forRoot(routes);

*/


import {NgModule}     from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: '/categories', pathMatch: 'full'},
            {path: 'categories', loadChildren: 'app/items/items.module#ItemsModule'},
            {path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class appRouterModule {
}