import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../../providers/angular-firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFirebaseService]
})
export class LoginComponent implements OnInit{
	returnUrl : string;
	constructor(private af: AngularFirebaseService, public router: Router, private route: ActivatedRoute){
		this.af._afAuth.authState;





		//this.router.navigate(['/login']);
	}

	ngOnInit(){
		//reset login state
		this.af.logout();

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	loginByEmail(){
		this.router.navigate(['auth/email-login']);
	}
}
