import { Injectable } from '@angular/core';

let images: string[] = [
  'https://marketplace.magento.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/f/a/facebook_login_2.png',
  'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x1100'
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
