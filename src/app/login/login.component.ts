import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../providers/angular-firebase.service';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFirebaseService],
  animations: [moveIn()]
})
export class LoginComponent{

	constructor(private af: AngularFirebaseService, public router: Router){
		this.af._afAuth.authState;
		//this.router.navigate(['/login']);
	}

	loginByEmail(){
		this.router.navigate(['/home/email-login']);
	}
}
