import {FlightSearchComponent} from './flight-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
