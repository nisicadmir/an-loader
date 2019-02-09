# Loader module for Angular6+ applications

## Installation

Download from npm

```
npm install --save an-angular-loader
```

### Angular installation

In app.module.ts

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnAngularLoaderModule } from 'an-angular-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AnAngularLoaderModule.forRoot(), // <--
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In app.component.html

```html
<an-angular-loader></an-angular-loader>
```
