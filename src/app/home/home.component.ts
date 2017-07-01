import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../providers/angular-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AngularFirebaseService]
})
export class HomeComponent implements OnInit {
  
  constructor(private _afAuth: AngularFirebaseService) { }

  ngOnInit() {

  }

}
