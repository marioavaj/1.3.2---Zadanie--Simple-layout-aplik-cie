import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../models/Product';
import { ProductServiceService } from "../../Services/product-service.service";


@Component({selector: 'app-statistika', templateUrl: './statistika.component.html',
 styleUrls: ['./statistika.component.scss']})

export class StatistikaComponent implements AfterViewInit,
OnInit 
{

    constructor(private productData: ProductServiceService ) {
    
    }
    dataToTable : Product[] = this.productData.getProductList();
    emptyStockItem : Product[];
    displayedColumns : string[] = [
        'name',
        'price',
        'stockCount',
        'sold',
        'lastMonthSold',
        'obrat'
    ];
    dataSource : MatTableDataSource < Product >;
    dataSource1 : MatTableDataSource < Product >;


    lastMonthSoldSum : number = 0;
    soldSum : number = 0;
    avgItemSum : number = 0;
    maxSoldItem : number = 0;
    maxSoldItemName : string;

    @ViewChild(MatPaginator)paginator : MatPaginator;
    @ViewChild(MatSort)sort : MatSort;


    
    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.dataToTable);
        this.emptyStockItem = this.dataToTable.filter((item) => {
            return item.stockCount === 0;
        });
        this.dataSource1 = new MatTableDataSource(this.emptyStockItem);

        this.dataToTable.forEach((element) => {
            this.lastMonthSoldSum += (element.lastMonthSold * element.price !);
            this.soldSum += (element.sold * element.price !);
            this.avgItemSum += Math.round(element.price !/ (this.dataToTable.length));

            if (element.sold > this.maxSoldItem) {
                this.maxSoldItem = element.sold;
                this.maxSoldItemName = element.name;
            }

        });


    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };

    clearTable() {
        this.dataSource.data = [];
    }

    addData() {
        this.dataSource.data = this.dataToTable;
    }

    dataToTableUnderThousand : Product[] = [];
    checked : boolean = true;
    onChange() {
        console.log(this.checked);
        if (this.checked) {
            console.log(this.checked);
            this.dataToTable.forEach((element) => {
                if (element.price!<= 1000) {
                this.dataToTableUnderThousand.push(element)
                 }
                 this.dataSource.data = this.dataToTableUnderThousand;
                 this.checked = false;
            })
           
          } else  {     
            this.dataSource.data = this.dataToTable;
            this.dataToTableUnderThousand = [];
            this.checked = true;
          }            
             }

             bestsellers(){
                this.dataSource.data =  this.productData.getBestseller();
             }
  }
