import {FlightSearchComponent} from './flight-search/flight-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightService } from "./flight-search/flight.service";
import { BASE_URL } from './app.tokens';


@NgModule({
  imports: [    // ANDERE MODULE
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [  // EIGENEN KOMPONENTEN, ...
    AppComponent, FlightSearchComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
