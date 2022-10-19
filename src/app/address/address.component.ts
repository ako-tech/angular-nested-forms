import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ako-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
})
export class AddressComponent
  implements OnDestroy, ControlValueAccessor, Validator
{
  @Input() legend = '';

  form = this.fb.group({
    line1: ['', Validators.required],
    city: '',
    zipCode: '',
  });

  private sub?: Subscription;
  onTouchedCb?: () => void;

  constructor(private fb: FormBuilder) {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.form.valid ? null : { invalidAddress: true };
  }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.sub = this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
