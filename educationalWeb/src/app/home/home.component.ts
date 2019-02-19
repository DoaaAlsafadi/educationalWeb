import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: string[];
  slideshowDelay = 2000;
  constructor(private homeService : HomeService) {
    this.dataSource = homeService.getImages();

   }

  ngOnInit() {
  }

  valueChanged(e) {
    this.slideshowDelay = e.value ? 2000 : 0;
}

  
}
