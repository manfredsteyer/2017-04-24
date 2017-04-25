import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {
    
    transform(value: string, fmt: string, lang: string): string {
        
        let long: string;
        let short: string;

        switch(value) {
            case "Hamburg":
                long = "Airport Hamburg Fulsbüttel Helmut Schmidt";
                short = "HAM";
            break;
            case "Graz":
                long = "Flughafen Graz Thalerhof";
                short = "GRZ";
            break;
            case "Nürnberg":
                long = "Airport Nürnberg Albrecht Dürer";
                short = "NUE";
            break;
            default:
                long = short = 'ROM';

        }

        if (fmt == 'short') return short;
        return long;

    }
}