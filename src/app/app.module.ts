import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckoutReactiveComponent } from './checkout-reactive/checkout-reactive.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, CheckoutReactiveComponent, AddressComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
