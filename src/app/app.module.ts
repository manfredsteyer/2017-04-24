import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [    // ANDERE MODULE
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [  // EIGENEN KOMPONENTEN, ...
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
