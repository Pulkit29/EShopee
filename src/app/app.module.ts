import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*
import { AngularFireModule } from 'angularfire2';

*/
import { AngularFirebaseService } from './providers/angular-firebase.service';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { CoreModule } from './coreModule/core.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';

import { appRouterModule } from "./app.routes";
import { LoginComponent } from './login/login.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { SignupComponent } from './signup/signup.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBMmT5EZaiu4uTnJw9-hHv907gaHCFYQko",
  authDomain: "eshopee-76b45.firebaseapp.com",
  databaseURL: "https://eshopee-76b45.firebaseio.com",
  projectId: "eshopee-76b45",
  storageBucket: "",
  messagingSenderId: "102603975299"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProductCategoriesComponent,
    ProductListComponent,
    LoginComponent,
    EmailLoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    appRouterModule
  ],

  providers: [AngularFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
