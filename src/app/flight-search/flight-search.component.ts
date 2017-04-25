import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Flight } from "../entities/flight";
import { FlightService } from "../flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;
    message: string;

    basket = {
        "3": true,
        "4": false,
        "5": true
    };

    // private http: Http;

    constructor(private flightService: FlightService) {
        console.debug('');
    }

    search(): void {
        this.flightService
            .find(this.from, this.to)
            .subscribe(
                flights => { this.flights = flights; },
                errResponse => { console.error('Fehler beim Laden', errResponse); }
            );
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }



}