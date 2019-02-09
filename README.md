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
    AnAngularLoaderModule.forRoot(), // <-- import here, forRoot() is necessary
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

In your component

```javascript
this.loaderService.display(true); // <-- turn on loader
this.loaderService.display(false); // <-- turn off loader
```

### Edit css

Main wrapper class
z-index for .an-angular-looader is 10000

```less
.an-angular-looader
```

Loader class

```less
.an-angular-looader-icon
```
