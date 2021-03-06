import {ActivatedRoute} from '@angular/router';


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flight-edit',
    template: `
        <h1>Flight Edit</h1>
        <p>Id: {{ id }} </p>
        <p>ShowDetails: {{ showDetails }}</p>
    `
})
export class FlightEditComponent implements OnInit {

    id: string;
    showDetails: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.showDetails = p['showDetails'];
        });

    }
}