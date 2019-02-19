import { Injectable } from '@angular/core';


let images: string[] = [
"https://marketplace.magento.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/f/a/facebook_login_2.png",
];

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  constructor() { }

  getImages() {
    return images;
}

}
