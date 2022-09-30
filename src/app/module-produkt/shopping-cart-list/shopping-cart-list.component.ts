import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';


@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  shopingCartItems: any = [];
  constructor(private data:ShopingCartServiceService) { }

  ngOnInit(): void {
    this.data.dataStream.subscribe((newValue)=>{
      this.shopingCartItems =newValue;
           
    });    
   
}

}

