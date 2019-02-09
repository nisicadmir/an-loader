import { Component } from '@angular/core';
import { AnAngularLoaderService } from 'an-angular-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private loaderService: AnAngularLoaderService) {
    this.loaderService.display(true);
    setTimeout(() => {
      this.loaderService.display(false);
    }, 5000);
  }
}
