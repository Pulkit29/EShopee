import { Injectable } from '@angular/core';

// New imports to update based on AngularFire2 version 4
/*import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
*/

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class AngularFirebaseService {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  userId;

  constructor(public _afAuth: AngularFireAuth, public af: AngularFireDatabase) {
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
