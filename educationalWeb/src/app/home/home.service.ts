import { Injectable } from '@angular/core';

let images: string[] = [
  'https://thewallpaper.co/wp-content/uploads/2016/02/download-wallpaper-colorful-widescreen-desktop-images-mac-desktop-photos-high-resolution-full-screen-1080p-1680x1050-768x480.jpg',
  'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x1100',
  'https://thewallpaper.co/wp-content/uploads/2016/10/Funny-guy-ice-big-fish-Hooks-humor-fisherman-winter-fishing-wallpapers-full-hd-desktop-images-amazing-colourful-4k-quality-images-colours-artwork-2560x1440-768x432.jpg'
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
