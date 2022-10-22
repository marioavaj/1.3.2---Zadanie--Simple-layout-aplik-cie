import {
    AbstractControl,
    Form,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

/*export function compareSoldLastMonthSold(form: FormGroup): {[key: string]: any} | null{
    let sold = parseInt(form.get('sold')?.value);
    let lastMonthSold = parseInt(form.get('lastMonthSold')?.value);
    console.log(sold < lastMonthSold ? { highValueThanSold: true } : null);

    return sold < lastMonthSold ? { highValueThanSold: true } : null;

}*/

//verzia z angular.io
export const compareSoldLastMonthSold: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    let sold = parseInt(control.get('sold')!.value);
    let lastMonthSold = parseInt(control.get('lastMonthSold')!.value);
    console.log(sold < lastMonthSold ? { highValueThanSold: true } : null);

    return sold < lastMonthSold ? { highValueThanSold: true } : null;
};

/*export  function  compaSoldLastMonthSold(form: FormGroup): ValidatorFn {
    const sold = form.controls['sold'].value;
    const lastMonthSold = form.controls['lastMonthSold'].value;


     return sold < lastMonthSold ? {mismatch: true} :  ;
  }*/

/*export function comparSoldLastMonthSold(g: FormGroup) {
    return g.get('sold')?.value < g.get('lastMonthSold')?.value
       ? null : {'mismatch': true};
 }*/
