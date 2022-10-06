import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductServiceService } from "../../Services/product-service.service";


@Component({
  selector: 'app-zoznam-produktov',
  templateUrl: './zoznam-produktov.component.html',
  styleUrls: ['./zoznam-produktov.component.scss'],
})
export class ZoznamProduktovComponent implements OnInit {
  
  productList: any[];
  sortByClicked: boolean;
  lastReview: string;
  filteredData: Product[];
  onStockCheckBox:boolean;
 
  constructor(private  ProductServiceService: ProductServiceService) {
    
  }

  ngOnInit(): void {
     this.ProductServiceService.getProductList().then((products:any[])=>{
      this.productList = products;
     });
   
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

