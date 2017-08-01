import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditCardModule } from "./features/credit-card/credit-card.module";
import { EagerComponent } from "./features/eager/eager.component";
//import { SharedModule } from "./shared/shared.module";
import { routing } from './app.routing';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    // Shared modules
    SharedModule.forRoot(),
    // Features modules
    CreditCardModule.forRoot(), // Allow for only one instance (Singleton) of CreditCardService
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
