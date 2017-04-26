import {FlightSearchComponent} from './flight-search.component';
import {RouterModule, Routes} from '@angular/router';
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";
import { FlightEditComponent } from "../flight-edit/flight-edit.component";
import { HomeComponent } from "app/home/home.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);