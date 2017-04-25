import {Flight} from '../entities/flight';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() { 
        console.debug('ctor', this.item, this.selected);
    }

    ngOnInit() { 
        console.debug('onInit', this.item, this.selected);
        this.selectedChange.next(true);

    }

    ngOnChanges(changes) {
        console.debug('onChanges', this.item, this.selected);
        if (changes.item) {
            console.debug('  item changed');
        }
        if (changes.selected) {
            console.debug('  selected changed');
        }
    }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    
}