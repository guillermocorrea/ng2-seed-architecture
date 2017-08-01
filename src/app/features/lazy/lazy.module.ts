import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [LazyComponent],
    providers: []
})
export class LazyModule { }