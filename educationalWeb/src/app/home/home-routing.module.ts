import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component'
import { RouterModule, Routes } from '@angular/router';
const homeRouting = [ {path:"home", component:HomeComponent} ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      homeRouting,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
    RouterModule,
  ],
})
export class HomeRoutingModule { }
