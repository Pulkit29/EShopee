import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


// New imports to update based on AngularFire2 version 4
/*import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
*/

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AngularFirebaseService  implements CanActivate {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  userId;

  constructor(public _afAuth: AngularFireAuth, public af: AngularFireDatabase, public router: Router) {
    /*
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    */

    this.user = this._afAuth.authState;

     

     //this.login();

     this._afAuth.authState.subscribe(data => this.userId = data.uid );
     //alert('1: '+ this.user);
     //alert('2: '+ this.userId);

  }

 
  canActivate(): Observable<boolean> {
      return this._afAuth.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticated => {
      if (!authenticated) {
        this.router.navigate(['/login']);
      }
    });
    }


  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {

  }

  login() {
    this._afAuth.auth.signInAnonymously();
  }

  logout() {
      this._afAuth.auth.signOut();
  }

}
