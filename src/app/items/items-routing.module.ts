import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [];

@NgModule({
  imports: [
  			RouterModule.forChild([
            	{
                	path: '',
                	component: HomeComponent,
                	children: [
	                    {
	                        path: '',
	                        component: ProductCategoriesComponent
	                    },
	                    {
	                        path: ':id',
	                        component: ProductListComponent
	                    }
                	]
            	}
       		 ])
        ],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
