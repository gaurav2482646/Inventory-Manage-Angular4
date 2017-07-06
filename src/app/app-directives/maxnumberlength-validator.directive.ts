import {Directive, Attribute, forwardRef} from '@angular/core';
import {NG_VALIDATORS, AbstractControl, ValidatorFn, MaxLengthValidator, Validator} from '@angular/forms';


@Directive({
  selector: '[validateNumberLength][formControlName], [validateNumberLength][formControl], [validateNumberLength][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxLengthValidator), multi: true}
  ]
})
export class MaxnumberlengthValidator implements Validator {

  private _validator: ValidatorFn;

  constructor(@Attribute('maxlength') public maxLength: number) {
    this._validator = MaxnumberlengthValidator.maxNumberLength(maxLength);
  }

  static maxNumberLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl) => {
      const length = control.value && control.value.toString().length ? control.value.toString().length : 0;
      return length > maxLength ?
        {'maxlength': {'requiredLength': maxLength, 'actualLength': length}} :
        null;
    };
  }

  validate(c) {
    return this.maxLength != null ? this._validator(c) : null;
  }

}
