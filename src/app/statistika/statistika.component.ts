import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {ProductDetails} from '../models/Product-details';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



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

     
     

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.css']
})

export class StatistikaComponent implements AfterViewInit, OnInit {
  dataToTable: Product[] = ProductDetails.productDetails; 
  emptyStockItem: Product[];
  displayedColumns: string[] = ['name', 'price', 'stockCount', 'sold','lastMonthSold', 'obrat' ];
  dataSource: MatTableDataSource<Product>;
  dataSource1: MatTableDataSource<Product>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataToTable);
    this.emptyStockItem = this.dataToTable.filter((item) => {
      return item.stockCount === 0;
          });
          this.dataSource1 = new MatTableDataSource(this.emptyStockItem);


    
     
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  
 
}



