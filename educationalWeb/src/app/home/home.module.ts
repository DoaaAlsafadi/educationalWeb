import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';
import { ImagesSliderComponent } from './images.slider/images.slider.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { AdviceComponent } from './advice/advice.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    ImagesSliderComponent,
    HomeComponent,
    NewsComponent,
    AdviceComponent
  ],

  imports:[
    CommonModule,
    DxGalleryModule
    DxCheckBoxModule,

  ],
  providers: [
    HomeService
  ],

  exports: [
    ImagesSliderComponent,
    HomeComponent,
    NewsComponent,
    AdviceComponent
  ],
})
export class HomeModule { }
