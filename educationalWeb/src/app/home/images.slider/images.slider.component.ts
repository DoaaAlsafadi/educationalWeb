import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images.slider.component.html',
  styleUrls: ['./images.slider.component.css']
})
export class ImagesSliderComponent implements OnInit {

  constructor() { }
dataSource = [
    "http://www.interestingfactsaboutlife.com/wp-content/uploads/2018/08/Interesting-facts-about-Animals.jpg",
    "http://www.interestingfactsaboutlife.com/wp-content/uploads/2018/08/Interesting-facts-about-Animals.jpg",
    "http://www.interestingfactsaboutlife.com/wp-content/uploads/2018/08/Interesting-facts-about-Animals.jpg",
    "http://www.interestingfactsaboutlife.com/wp-content/uploads/2018/08/Interesting-facts-about-Animals.jpg",
    "http://www.interestingfactsaboutlife.com/wp-content/uploads/2018/08/Interesting-facts-about-Animals.jpg",
  ];
  ngOnInit() {
  }

}
