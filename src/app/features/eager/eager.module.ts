import { NgModule } from '@angular/core';

import { EagerComponent } from './eager.component';
import { routing } from './eager.routing';
import { CounterService } from "../../shared/counter.service";

@NgModule({
    imports: [routing],
    declarations: [EagerComponent]
})
export class EagerModule { }