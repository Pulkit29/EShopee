import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AngularFirebaseService} from './providers/angular-firebase.service';


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
    redirectTo: '/home/categories',
    pathMatch: 'full'
  }
];

export const appRouterModule = RouterModule.forRoot(routes);