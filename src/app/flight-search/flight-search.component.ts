import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Flight } from "../entities/flight";
import { FlightService } from "../flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: []
})
export class FlightSearchComponent {

    from: string;
    to: string;
    // flights: Array<Flight> = [];

    // let x = comp.flights;
    get flights() {
        return this.flightService.flights;
    }

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

    search(): Promise<Flight[]> {

        if (!this.from || !this.to) {
            return Promise.reject('from and to expected!');
        }

        return new Promise<Flight[]>((resolve: Function, reject: Function) => {

            this.flightService.find(this.from, this.to);
            
        });
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }



}