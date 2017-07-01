import { Component, OnInit } from '@angular/core';
import {AngularFirebaseService} from '../providers/angular-firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AngularFirebaseService]
})

export class NavComponent implements OnInit {
  
  isNavCollapsed : boolean = true;
  constructor(private _afAuth : AngularFirebaseService) { }

  ngOnInit() {
  }
  
  toggleCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  login() : void{
    this._afAuth.login();
  }
}
