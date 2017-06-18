import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  
  isNavCollapsed : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  
  toggleCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }
}
