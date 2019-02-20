import { Injectable } from '@angular/core';

let images: string[] = [
  'https://www.sayidy.net/sites/default/files/styles/660xauto/public/main/articles/dl0xwafw0aeeyd1.jpg?itok=QLFeBUD0',
  'https://arabic.sport360.com/wp-content/uploads/2019/01/1547895692_158994_1547895807_album_grande.jpg',
  'http://sportive-production.s3.amazonaws.com/wp/uploads/2019/01/DxG-AWQWsAACwEV.jpg',
  'https://pbs.twimg.com/media/DxRP1SFWsAEdhKP.jpg:large',
  'https://www.trollfootball.me/upload/full/2019/01/19/official-ucl-ball-for-knockout-stages-is-unveiled.jpg',
  'http://i.dailymail.co.uk/i/newpix/2018/06/26/10/4DA4EF9900000578-5886595-The_newly_released_Telstar_Mechta_will_be_used_during_the_knocko-a-10_1530005743305.jpg',
  'http://img.kooora.com/?i=mhmed_aziz%2Fjanuary%2Fkas+dawry+abtal.jpg',
  'http://images.sportspromedia.com/images/made/images/uploads/news/real_madrid_naming_rights_630_354_80_s_c1.jpg',
  'https://i1.wp.com/www.9sportpro.com/wp-content/uploads/2017/02/bernabeu1.jpg?resize=633%2C347&ssl=1'
];

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() {}

  getImages() {
    return images;
  }
}
