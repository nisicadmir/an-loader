import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnLoaderService } from './an-loader.service';

@Component({
  selector: 'an-loader',
  templateUrl: 'an-loader.component.html',
  styleUrls: ['an-loader.component.less'],
})
export class AnLoaderComponent implements OnInit {
  public showLoader: number[] = [];
  private subscription: Subscription;

  constructor(public loaderService: AnLoaderService) {}

  ngOnInit() {
    this.initLoader();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Turns on or off the global loader
   * constructor(public loaderService: AnLoaderService) {}
   * turn on // this.loaderService.display(true)
   * turn off // this.loaderService.display(false)
   */

  private initLoader() {
    this.subscription = this.loaderService.status.subscribe(data => {
      data === true ? this.showLoader.push(0) : this.showLoader.pop();
    });
  }
}
