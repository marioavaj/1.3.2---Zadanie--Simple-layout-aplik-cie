import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({providedIn: 'root'})
export class ShopingCartServiceService {

    shopingCart:Product[] = [];
    dataStream = new BehaviorSubject<any>(0);
    numberOfItems : number;
    constructor() {}

    putData(data: Product) {
      
      this.shopingCart.push(data);
      this.dataStream.next(this.shopingCart);
            }


    
}
