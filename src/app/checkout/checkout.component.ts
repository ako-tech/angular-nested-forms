import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    deliveryAddress: this.fb.group({
      line1: '',
      city: '',
      zipCode: '',
    }),
    billingAddress: this.fb.group({
      line1: '',
      city: '',
      zipCode: '',
    }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
