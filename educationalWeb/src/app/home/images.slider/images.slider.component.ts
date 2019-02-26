import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images.slider.component.html',
  styleUrls: ['./images.slider.component.css']
})
export class ImagesSliderComponent implements OnInit {
  slides;
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true };

  constructor(private homeService: HomeService) {
    this.slides = homeService.getImagesSlider();
  }

  ngOnInit() {}
}
