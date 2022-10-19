import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'ako-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      // useExisting: NgForm,
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
