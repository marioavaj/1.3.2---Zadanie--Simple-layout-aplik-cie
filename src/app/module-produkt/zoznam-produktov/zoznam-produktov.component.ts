import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductServiceService } from "../../Services/product-service.service";


@Component({
  selector: 'app-zoznam-produktov',
  templateUrl: './zoznam-produktov.component.html',
  styleUrls: ['./zoznam-produktov.component.scss'],
})
export class ZoznamProduktovComponent implements OnInit {
  
  productList: Product[];
  sortByClicked: boolean;
  lastReview: string;
  filteredData: Product[];
  onStockCheckBox:boolean;
 
  constructor(private productData: ProductServiceService ) {
    
  }

  ngOnInit(): void {
    this.productList = this.productData.getProductList();
    console.log(this.productList);
   this.filteredData = this.productList;
   this.sortByClicked = false;
      }

  lastReviewDisplayed(review: any, name:string): void {
     let date = new Date().toLocaleString();
    this.lastReview = date+ ' na produkt ' + name+ ': ' + review;
  }

  onFilterDone(item: Product[]) {
      this.filteredData = item;
  }
  inputCheckBox(onStock:boolean):void{
this.onStockCheckBox = onStock;
  }

  isClicked(){
this.sortByClicked = !this.sortByClicked;
  }
}

