import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {ProductDetails} from '../models/Product-details';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';


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

     let dataToTable: Product[] = ProductDetails.productDetails; 

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.css']
})

export class StatistikaComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'price', 'stockCount', 'sold','lastMonthSold', 'obrat' ];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(dataToTable);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}



