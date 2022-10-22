import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({providedIn: 'root'})
export class ShopingCartServiceService {



             shopingCart:any[] = [];
    dataStream = new BehaviorSubject<any>(0);

    numberOfItems : number;
    constructor() {}

    putData(data: Product) {

      this.shopingCart.push(data);
      this.dataStream.next(this.shopingCart);
            }

    deleteItem(item: number) {

      const indexOfObject = this.shopingCart.findIndex(object => {
         return object.id === item;
          }
      );
      this.shopingCart.splice(indexOfObject, 1);
      this.dataStream.next(this.shopingCart);
                 }

}
