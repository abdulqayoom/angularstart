import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[Emailvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true}]


})
export class EmailDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value=control.value as string;
    if(value.includes('test')){
      return {
        invalidemail:true
      }
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {

  }

}
