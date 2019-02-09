import { NgModule } from '@angular/core';
import { AnLoaderComponent } from './an-loader.component';
import { AnLoaderService } from './an-loader.service';

@NgModule({
  imports: [],
  declarations: [AnLoaderComponent],
  exports: [AnLoaderComponent],
})
export class AnLoaderModule {
  static forRoot() {
    return {
      ngModule: AnLoaderModule,
      // services that you want to share across modules
      providers: [AnLoaderService],
    };
  }
}
