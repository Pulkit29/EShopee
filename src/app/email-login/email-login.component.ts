import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../providers/angular-firebase.service';
import { Router } from '@angular/router';

import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css'],
  animations: [moveIn(), fallIn()]
})
export class EmailLoginComponent implements OnInit {

	state: string = '';
    error: any;

    constructor(private af: AngularFirebaseService) {
    	/*
    	this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
    */
  }


  onSubmit(formData) {

    if(formData.valid) {

    	/*
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
      */
    }
  }

  ngOnInit() {
  }

}
