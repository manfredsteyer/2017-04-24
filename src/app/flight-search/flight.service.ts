import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Flight } from "../entities/flight";
import { BASE_URL } from "app/app.tokens";

@Injectable()
export class FlightService {


    //private baseUrl;
    // public, private, protected, readonly

    constructor(
        private http: Http, 
        @Inject(BASE_URL) private baseUrl: string) { 
        console.debug('');
    
        //this.baseUrl = baseUrl;
    }

    find(from: string, to: string): Observable<Flight[]> {
        let url = this.baseUrl + '/flight';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        return this.http
                    .get(url, { headers, search})
                    .map(resp => resp.json());

    }
}