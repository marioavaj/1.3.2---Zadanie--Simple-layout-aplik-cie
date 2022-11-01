import {
    AbstractControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export function compareSoldLastMonthSold(
    form: any
): { [key: string]: any } | null {
    let sold = parseInt(form.get('sold')?.value);
    let lastMonthSold = parseInt(form.get('lastMonthSold')?.value);

    return sold < lastMonthSold ? { highValueThanSold: true } : null;
}

//verzia z angular.io
export const comparSoldLastMonthSold: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    let sold = parseInt(control.get('sold')?.value);
    let lastMonthSold = parseInt(control.get('lastMonthSold')?.value);

    return sold < lastMonthSold ? { highValueThanSold: true } : null;
};


/*export function comparSoldLastMonthSold(g: FormGroup) {
    return g.get('sold')?.value < g.get('lastMonthSold')?.value
       ? null : {'mismatch': true};
 }*/
