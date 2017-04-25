
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({ 
    selector: 'input[city]',
    providers: [
        { 
            provide: NG_VALIDATORS, 
            useExisting: CityValidationDirective, 
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {
    constructor() { }

    @Input() city: string;

    validate(c: AbstractControl): any {

        let allowedCities = this.city.split(',');
        
        if (allowedCities.indexOf(c.value) > -1) {
            return {};
        }

        return {
            city: {
                actual: c.value,
                allowed: allowedCities,
                reason: 42
            }
        };

    }

}