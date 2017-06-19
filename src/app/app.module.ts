import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';

import { appRouterModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProductCategoriesComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    appRouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
