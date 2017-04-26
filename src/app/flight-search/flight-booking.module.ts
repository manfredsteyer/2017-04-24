import {FlightSearchComponent} from './flight-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightCardComponent } from "./flight-card.component";
import { ReactiveFlightSearchComponent } from "app/reactive-flight-search/reactive-flight-search.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        ReactiveFlightSearchComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent,
        ReactiveFlightSearchComponent
    ]
})
export class FlightBookingModule { }
