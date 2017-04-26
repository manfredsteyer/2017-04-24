import {Flight} from '../entities/flight';
import {BASE_URL} from '../app.tokens';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightCardComponent } from './flight-card.component';
import { FlightService } from './flight.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

let flightServiceMock = {
  find(from: string, to: string): Observable<Flight[]> {
    return Observable.of([{ id: 4711, from: 'Buxdehude', to: 'Graz', date: '' }]);
  }
};

describe('FlightSearchComponent', () => {
  
  beforeEach(async(() => {
    
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        SharedModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: flightServiceMock}
        ]
      }
    }).compileComponents();

  }));

  it('selectedFlight is null initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    // fixture.nativeElement // Direkt HTML-Zugriff
    // fixture.debugElement // Wrapper für nativeElement
    let comp = fixture.componentInstance;
    expect(comp.selectedFlight).toBeUndefined();
  });

  it('has not flights initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    // fixture.nativeElement // Direkt HTML-Zugriff
    // fixture.debugElement // Wrapper für nativeElement
    let comp = fixture.componentInstance;
    expect(comp.flights.length).toBe(0);
  });

  it('does not search for flight without from and/or to', async(() => {
    let fixture = TestBed.createComponent(FlightSearchComponent);

    let comp = fixture.componentInstance;
    
    comp.from = '';
    comp.to = '';
    let ok = true;

    comp.search()
        .then((flights) => {
          console.debug('ok', flights);
          ok = true;
        })
        .catch((err) => {
          console.debug('err', err);
          ok = false;
        })
        .then(() => {
          console.debug('finally', ok);
          expect(ok).toBeFalsy();
        });
    
  }));


  it('does search for flight with from and to', async(() => {
    let fixture = TestBed.createComponent(FlightSearchComponent);

    let comp = fixture.componentInstance;
    
    comp.from = 'Hamburg';
    comp.to = 'Graz';
    let ok = true;

    comp.search()
        .then((flights) => {
          console.debug('ok', flights);
          expect(flights.length).toBe(1);
          ok = true;
        })
        .catch((err) => {
          console.debug('err', err);
          ok = false;
        })
        .then(() => {
          console.debug('finally', ok);
          expect(ok).toBeTruthy();
          
        });
    
  }));


});
