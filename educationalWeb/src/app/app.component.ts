import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educationalWeb';
  screen(width) {
    return width < 700 ? 'sm' : 'lg';
  }
}
