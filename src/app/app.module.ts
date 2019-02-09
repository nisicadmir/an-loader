import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnAngularLoaderModule } from 'an-angular-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AnAngularLoaderModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
