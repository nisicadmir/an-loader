# Loader module for Angular6+ applications

## Installation

Download from npm

```
npm install --save an-loader
```

## Angular installation

In app.module.ts

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnLoaderModule } from 'an-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AnLoaderModule.forRoot(), // <-- import here, forRoot() is necessary
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In app.component.html

```html
<an-loader></an-loader>
```

In your component, first import

```javascript
import { AnLoaderService } from 'an-loader';
constructor(private loaderService: AnLoaderService){}
```

Then anywhere in your component

```javascript
this.loaderService.display(true); // <-- turn on loader
this.loaderService.display(false); // <-- turn off loader
```

## Edit css

Main wrapper class
z-index for .an-looader is 10000

```less
.an-looader
```

Loader class

```less
.an-looader-icon
```
