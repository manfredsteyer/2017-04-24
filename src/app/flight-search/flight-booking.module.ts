import {FlightSearchComponent} from './flight-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightCardComponent } from "./flight-card.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
