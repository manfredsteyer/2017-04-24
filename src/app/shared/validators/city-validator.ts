import { AbstractControl,ValidatorFn } from "@angular/forms";

export class CityValidator {

    static validateCity(c: AbstractControl): any {

        if (c.value == 'Graz' || c.value == 'Hamburg') {
            return { };    
        }
        return { city: true };
        
    }

    static validateWithParams(allowedCities: string[]): ValidatorFn {
        return function (c: AbstractControl): any {
            if (allowedCities.indexOf(c.value) > -1) {
                return {};
            }
            return {
                city: true
            }
        }
    }

}