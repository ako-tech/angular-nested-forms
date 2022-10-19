import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export function generateAddressFormGroup(): FormGroup {
  return new FormGroup({
    line1: new FormControl('', Validators.required),
    city: new FormControl(''),
    zipCode: new FormControl(''),
  });
}

@Component({
  selector: 'ako-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () =>
        inject(ControlContainer, { skipSelf: true, host: true }),
    },
  ],
})
export class AddressComponent implements OnInit {
  @Input() groupName = '';
  @Input() legend = '';

  constructor() {}

  ngOnInit(): void {}
}
