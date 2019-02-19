import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images.slider/images.slider.component';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';
import { HomeComponent } from './home.component'
@NgModule({
  declarations: [
    ImagesSliderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxGalleryModule,

    // HomeRoutingModule
  ],
  exports:[
    ImagesSliderComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
