import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {
  dataSource: string[];
  slideshowDelay = 2000;

  constructor(private homeService: HomeService) {
    // this.dataSource = homeService.getImages();
  }

  ngOnInit() {}
}
