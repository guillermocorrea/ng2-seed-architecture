import { Component } from '@angular/core';
import { CounterService } from "../../shared/counter.service";

@Component({
    template: `
    <p myHighlight>Lazy Component</p>
    <button (click)="increaseCounter()">Increase Counter</button>
    <p>Counter: {{ counterService.counter }}</p>
  `
})
export class LazyComponent {
    constructor(public counterService: CounterService) { }

    increaseCounter() {
        this.counterService.counter += 1;
    }
}