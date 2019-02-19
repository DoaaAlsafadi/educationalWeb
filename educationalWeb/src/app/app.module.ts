import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesSliderComponent } from './home/images.slider/images.slider.component';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesSliderComponent
  ],
  imports: [
    BrowserModule,
    DxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
