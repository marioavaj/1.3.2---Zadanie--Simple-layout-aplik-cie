import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';


@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit, DoCheck {

  deleteItemFromCart:any;
  shopingCartItems;
  total?:number;
  constructor(private data:ShopingCartServiceService, private newStockCount: ProductServiceService) { }

  ngOnInit(): void {
      
    this.data.dataStream.subscribe((newValue)=>{
      this.shopingCartItems =newValue;           
    });  
    this.total = 0;    
    this.totalSum();
}

ngDoCheck(): void {

}

deleteItem(id:number, stockCount:number){
  stockCount++;
  console.log("po pripocitani" + stockCount)
this.data.deleteItem(id);
  this.totalSum();
  this.newStockCount.plusStockCount(id, stockCount);
  
}

totalSum():void{
  this.total = 0;
    for(let i = 0; i<this.shopingCartItems.length; i++){
    this.total += this.shopingCartItems[i].price
  }  


  
}
}

