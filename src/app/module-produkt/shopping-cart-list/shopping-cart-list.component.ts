import { Component, OnInit, DoCheck } from '@angular/core';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';


@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit, DoCheck {

  deleteItemFromCart:any;
  shopingCartItems: any = [];
  total?;
  constructor(private data:ShopingCartServiceService) { }

  ngOnInit(): void {
    this.data.dataStream.subscribe((newValue)=>{
      this.shopingCartItems =newValue;           
    });  
    this.total = 0;
    this.totalSum();
}

ngDoCheck(): void {

}

deleteItem(id:number){
this.data.deleteItem(id);
  this.totalSum();
}

totalSum():void{
  this.total = 0;
    for(let i = 0; i<this.shopingCartItems.length; i++){
    this.total += this.shopingCartItems[i].price
  }  


  
}
}

