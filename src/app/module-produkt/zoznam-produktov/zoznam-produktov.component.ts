import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductDetails } from '../../models/Product-details';
import { SortByPipePipe } from '../sort-by-pipe.pipe';


@Component({
  selector: 'app-zoznam-produktov',
  templateUrl: './zoznam-produktov.component.html',
  styleUrls: ['./zoznam-produktov.component.scss'],
})
export class ZoznamProduktovComponent implements OnInit {
  productList: Product[];
  date;
  sortByClicked: boolean;
 
  
  lastReview: string;
  filteredData: Product[];
  onStockCheckBox:boolean;
 
  constructor() {}

  ngOnInit(): void {
   this.productList = ProductDetails.productDetails;
   this.filteredData = this.productList;
   this.sortByClicked = false;
   
  }

  lastReviewDisplayed(review: any, name:string): void {
     this.date = new Date().toLocaleString();
    this.lastReview = this.date+ ' na produkt ' + name+ ': ' + review;
  }

  onFilterDone(item: Product[]) {
      this.filteredData = item;
  }
  inputCheckBox(onStock:boolean):void{
this.onStockCheckBox = onStock;
  }

  isClicked(){
this.sortByClicked = !this.sortByClicked;
    
console.log(this.sortByClicked);
  }
}

