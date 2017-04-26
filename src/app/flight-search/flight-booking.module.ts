import {FlightSearchComponent} from './flight-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightCardComponent } from "./flight-card.component";
import { ReactiveFlightSearchComponent } from "app/reactive-flight-search/reactive-flight-search.component";
import { FlightBookingRouterModule } from "./flight-booking.routes";
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";
import { FlightEditComponent } from "../flight-edit/flight-edit.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        ReactiveFlightSearchComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent,
        ReactiveFlightSearchComponent
    ]
})
export class FlightBookingModule { }
