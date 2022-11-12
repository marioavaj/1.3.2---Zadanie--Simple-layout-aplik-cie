import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/Product';

@Pipe({
    name: 'myProduct',
})
export class MyProductPipe implements PipeTransform {
    transform(value: Product[], args: boolean): Product[] {
        if (value) {
            return this.newValue(value, args);
        } else return [];
    }

    newValue(productList: Product[], args: boolean): Product[] {
        let result: Product[] = [];
        if (args === true) {
            productList.forEach((item) => {
                if (item.editPermission) {
                    result.push(item);
                }
            });
            console.log(result);
            return result;
        } else {
            return productList;
        }
    }
}
