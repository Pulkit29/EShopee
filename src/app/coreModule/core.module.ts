import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
 imports: [ CommonModule ],
 declarations: [ NavComponent ],
 exports: [ NavComponent, HomeComponent ],
 providers: []
})
export class CoreModule { }