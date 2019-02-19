import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxGalleryModule,
    DxCheckBoxModule
    
  ],

  providers: [
    HomeService
  ],
})
export class HomeModule { }
