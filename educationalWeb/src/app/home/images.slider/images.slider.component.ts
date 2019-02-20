import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images.slider.component.html',
  styleUrls: ['./images.slider.component.css']
})
export class ImagesSliderComponent implements OnInit {
  dataSource: string[];
  slideshowDelay = 2000;

  constructor(private homeService: HomeService) {
    this.dataSource = homeService.getImages();
  }

  ngOnInit() {}
}
