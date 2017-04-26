import { Http, Headers, URLSearchParams } from '@angular/http';
import { Component } from "@angular/core";
import { Flight } from "../entities/flight";
import { FlightService } from "../flight-search/flight.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CityValidator } from "../shared/validators/city-validator";

@Component({
    selector: 'reactive-flight-search',
    templateUrl: './reactive-flight-search.component.html',
    styleUrls: ['./reactive-flight-search.component.css'],
    providers: [FlightService]
})
export class ReactiveFlightSearchComponent {


    filter: FormGroup;
    
    flights: Array<Flight> = [];
    selectedFlight: Flight;
    message: string;

    formMetaData = [
        { name: 'from', label: 'From' },
        { name: 'to', label: 'To' }
    ]

    basket = {
        "3": true,
        "4": false,
        "5": true
    };

    // private http: Http;

    constructor(
        private fb: FormBuilder,
        private flightService: FlightService) {
        
        this.filter = fb.group({
            from: ['Graz', [ CityValidator.validateWithParams(['Graz', 'Hamburg', 'Nürnberg']), /*CityValidator.validateCity*/, Validators.required, Validators.minLength(3), Validators.pattern("\\D*")]],
            to: ['Hamburg'],
        });

        this.filter.valueChanges.subscribe(formValue => {
            console.debug('Geänderte Formulardaten', formValue);
        });

        this.filter.controls['from'].valueChanges.subscribe(from => {
            console.debug('Geänderter Wert für from', from);
        });

    }

    search(): void {
        this.flightService
            .find(this.filter.value.from, this.filter.value.to)
            .subscribe(
                flights => { this.flights = flights; },
                errResponse => { console.error('Fehler beim Laden', errResponse); }
            );
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }



}