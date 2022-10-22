import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
    name: 'sortByPipe',
})
export class SortByPipePipe implements PipeTransform {


                                             transform(value: Product[], args: boolean): Product[] {
        if (value)      {
            return this.newValue(value, args);
        }
        return [];
    }
                  newValue(productList: Product[], args: boolean): Product[] {

        if (args === false) {


            return productList.sort(this.sortAZ);
        } else {
            function compare(a: Product, b: Product) {
   if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            }

            return productList.sort(compare);
        }
    }

     sortAZ(a: Product, b: Product): number {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
