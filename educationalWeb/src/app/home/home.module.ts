import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images.slider/images.slider.component';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    ImagesSliderComponent
  ],
  imports: [
    CommonModule,
    DxGalleryModule
  ]
})
export class HomeModule { }
