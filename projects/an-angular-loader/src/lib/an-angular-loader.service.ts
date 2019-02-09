import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnAngularLoaderService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  public display(val: boolean): void {
    this.status.next(val);
  }
}
