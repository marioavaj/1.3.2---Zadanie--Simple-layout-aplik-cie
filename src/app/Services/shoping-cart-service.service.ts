import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({providedIn: 'root'})
export class ShopingCartServiceService {

    shopingCart : any = [];
    dataStream = new BehaviorSubject<any>(0);
    numberOfItems : number;

    constructor() {}

    putData(data : Product) {
      this.shopingCart.push(JSON.stringify(data));
      this.dataStream.next(this.shopingCart);
        console.log("V kosiku je \n" + this.shopingCart + "\n");
    }
    getShopingCartItems(): Product[]{return this.shopingCart}

}
