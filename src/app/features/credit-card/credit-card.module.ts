import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardMaskPipe } from './credit-card-mask.pipe';
import { CreditCardService } from './credit-card.service';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CreditCardMaskPipe,
        CreditCardComponent
    ],
    exports: [CreditCardComponent]
})
export class CreditCardModule { 
    // Allows to provide the service as a singleton even if it is lazy loaded
    // Always use the forRoot syntax when exporting services from feature modules
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CreditCardModule,
            providers: [CreditCardService]
        };
    }
}