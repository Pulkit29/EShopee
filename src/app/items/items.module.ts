import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ItemsRoutingModule } from './items-routing.module';

import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    NgbModule.forRoot()  // For using ngb-corousal
  ],
  declarations: [
  		HomeComponent,
  		ProductCategoriesComponent,
  		ProductListComponent
  	]
})
export class ItemsModule { }
