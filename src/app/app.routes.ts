import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';


// Route config let's you map routes to components
const routes: Routes = [
  // map '/home' to the people list component
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ProductCategoriesComponent } //url : /
    ]
  },
  // map '/' to '/home' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  	path: 'product-categories',
  	component: ProductCategoriesComponent
  }
];

export const appRouterModule = RouterModule.forRoot(routes);