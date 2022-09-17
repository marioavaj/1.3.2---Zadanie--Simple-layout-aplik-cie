import { Component, OnInit } from '@angular/core';
import {ProductDetails} from '../models/Product-details';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stockCount: number;
  sold: number,
  lastMonthSold: number,
  description: string;
  vendors: Vendor[];
  reviews: string[]
}
export interface Vendor{
    name: string;
     stockCount: number}

     let ELEMENT_DATA: Product[] = ProductDetails.productDetails; 

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.css']
})


  
export class StatistikaComponent implements OnInit {
  ngOnInit(): void {
    
    console.log(ELEMENT_DATA);
   }

  
  displayedColumns: string[] = [ 'name', 'price', 'stockCount', 'sold' , 'lastMonthSold'];
  dataSource = ELEMENT_DATA;
 
}

  



