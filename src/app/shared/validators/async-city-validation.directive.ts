
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: 'input[asyncCity]',
    providers: [
        { 
            provide: NG_ASYNC_VALIDATORS, 
            useExisting: AsyncCityValidationDirective, 
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements Validator {
    constructor() { }


    validate(c: AbstractControl): Promise<any> {

        return new Promise<any>((resolve: Function) => {

            setTimeout(() => {
                resolve({ asyncCity: true });
            },3000);

        })
    }

}