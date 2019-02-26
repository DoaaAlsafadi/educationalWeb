import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { DxCheckBoxModule, DxGalleryModule } from 'devextreme-angular';
import { ImagesSliderComponent } from './images.slider/images.slider.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { AdviceComponent } from './advice/advice.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { CountUpModule } from 'countup.js-angular2';
import { DxResponsiveBoxModule } from 'devextreme-angular';
import { SlickModule } from 'ngx-slick';
@NgModule({
  declarations: [
    ImagesSliderComponent,
    HomeComponent,
    NewsComponent,
    AdviceComponent,
    StatisticsComponent
  ],

  imports: [
    CommonModule,
    DxGalleryModule,
    DxCheckBoxModule,
    HomeRoutingModule,
    RouterModule,
    CountUpModule,
    DxResponsiveBoxModule,
    SlickModule.forRoot()
  ],
  providers: [HomeService],

  exports: [
    ImagesSliderComponent,
    HomeComponent,
    NewsComponent,
    AdviceComponent
  ]
})
export class HomeModule {}
