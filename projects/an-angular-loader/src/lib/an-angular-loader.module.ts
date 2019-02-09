import { NgModule } from '@angular/core';
import { AnAngularLoaderComponent } from './an-angular-loader.component';
import { AnAngularLoaderService } from './an-angular-loader.service';

@NgModule({
  imports: [],
  declarations: [AnAngularLoaderComponent],
  exports: [AnAngularLoaderComponent],
})
export class AnAngularLoaderModule {
  static forRoot() {
    return {
      ngModule: AnAngularLoaderModule,
      // services that you want to share across modules
      providers: [AnAngularLoaderService],
    };
  }
}
