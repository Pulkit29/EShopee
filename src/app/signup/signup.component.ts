import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../providers/angular-firebase.service';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  providers: [AngularFirebaseService]
})
export class SignupComponent implements OnInit {

  ngOnInit() {
  }


	state: string = '';
	  error: any;

	  constructor(private af: AngularFirebaseService, private router: Router) {
	  }

	  onSubmit(formData) {
	    if(formData.valid) {
	      //alert(formData.value.email + formData.value.password);
	      
	      this.af.signup(formData.value.email, formData.value.password)
	    	.then(() => {
	    		this.router.navigate(['/home/login'])
		      }, (error) => {
		      		this.error = error;
		      });


	      /*
	      this.af._afAuth.auth.createUser({
	        email: formData.value.email,
	        password: formData.value.password
	      }).then(
	        (success) => {
	        console.log(success);
	        this.router.navigate(['/login'])
	      }).catch(
	        (err) => {
	        console.log(err);
	        this.error = err;
	      })
	      */
	    }
	  }

}
