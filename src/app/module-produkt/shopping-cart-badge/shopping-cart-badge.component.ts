import { Component, OnInit } from '@angular/core';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';

@Component({
  selector: 'app-shopping-cart-badge',
  templateUrl: './shopping-cart-badge.component.html',
  styleUrls: ['./shopping-cart-badge.component.scss',]
})
export class ShoppingCartBadgeComponent implements OnInit {
  
  shopingCartItems:any;
  numberOfItems:number;
  counter:number;

  constructor(private data: ShopingCartServiceService) { }

  ngOnInit(): void {
    this.data.dataStream.subscribe((newValue)=>{
      this.shopingCartItems = newValue;
      this.getNumberOfItems();    
    });    
    }

 getNumberOfItems() {
    this.counter = 0;
    for (let i = 0; i < this.shopingCartItems.length; i++) {
        this.counter++;
        this.numberOfItems = this.counter; 
    }         
}  
}

