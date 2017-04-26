import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "./pipes/city.pipe";
import { CityValidationDirective } from "./validators/city-validation.directive";
import { RoundTripValidationDirective } from "./validators/roundtrip-validation.directive";
import { AsyncCityValidationDirective } from "./validators/async-city-validation.directive";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ]
})
export class SharedModule { }
