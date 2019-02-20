import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  dataSource: string[];
  slideshowDelay = 2000;

  constructor(private homeService: HomeService) {
    this.dataSource = homeService.getImages();
  }

  ngOnInit() {}
}
