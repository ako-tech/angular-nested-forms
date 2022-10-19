import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckoutReactiveComponent } from './checkout-reactive/checkout-reactive.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, CheckoutReactiveComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
