import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ako-checkout-reactive',
  templateUrl: './checkout-reactive.component.html',
  styleUrls: ['./checkout-reactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutReactiveComponent implements OnInit {
  form = this.fb.group({
    fullName: '',
    email: '',
    deliveryAddress: {
      line1: '',
      city: '',
      zipCode: '',
    },
    billingAddress: {
      line1: '',
      city: '',
      zipCode: '',
    },
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
