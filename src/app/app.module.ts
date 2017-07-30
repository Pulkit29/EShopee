import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

/*
import { AngularFireModule } from 'angularfire2';

*/
import { AngularFirebaseService } from './providers/angular-firebase.service';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';


import { appRouterModule } from "./app.routes";
import { CoreModule } from './coreModule/core.module';



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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    appRouterModule,
    CoreModule
  ],

  providers: [AngularFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
