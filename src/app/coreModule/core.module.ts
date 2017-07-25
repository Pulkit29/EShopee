import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
 imports: [ CommonModule, CoreRoutingModule ],
 declarations: [ NavComponent, FooterComponent ],
 exports: [ NavComponent, FooterComponent ],
 providers: []
})
export class CoreModule { }