import { Component } from '@angular/core';
import { AnLoaderService } from 'an-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private loaderService: AnLoaderService) {
    this.loaderService.display(true);
    setTimeout(() => {
      this.loaderService.display(false);
    }, 5000);
  }
}
