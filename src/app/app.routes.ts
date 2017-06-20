import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';



// Route config let's you map routes to components
const routes: Routes = [
  // map '/home' to the people list component
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: 'categories', component: ProductCategoriesComponent }, //url : /
      { path: 'categories/:id', component: ProductListComponent }, //url : /
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