import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  slides;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true
  };

  constructor(private homeService: HomeService) {
    this.slides = homeService.getImages();
  }

  ngOnInit() {}
}
