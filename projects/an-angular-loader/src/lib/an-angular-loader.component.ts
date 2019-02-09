import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnAngularLoaderService } from './an-angular-loader.service';

@Component({
  selector: 'an-angular-loader',
  templateUrl: 'an-angular-loader.component.html',
  styleUrls: ['an-angular-loader.component.less'],
})
export class AnAngularLoaderComponent implements OnInit {
  public showLoader: number[] = [];
  private subscription: Subscription;

  constructor(public loaderService: AnAngularLoaderService) {}

  ngOnInit() {
    this.initLoader();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Turns on or off the global loader
   * constructor(public loaderService: AnAngularLoaderService) {}
   * turn on // this.loaderService.display(true)
   * turn off // this.loaderService.display(false)
   */

  private initLoader() {
    this.subscription = this.loaderService.status.subscribe(data => {
      data === true ? this.showLoader.push(0) : this.showLoader.pop();
    });
  }
}
