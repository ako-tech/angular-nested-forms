import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { generateAddressFormGroup } from '../address/address.component';

@Component({
  selector: 'ako-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  form = this.fb.group({
    fullName: '',
    email: '',
    deliveryAddress: generateAddressFormGroup(),
    billingAddress: generateAddressFormGroup(),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
