import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/Product';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-statistika',
    templateUrl: './statistika.component.html',
    styleUrls: ['./statistika.component.scss'],
})
export class StatistikaComponent implements AfterViewInit, OnInit {
    dataToTable: Product[];

    constructor(private productData: ProductServiceService) {}

    emptyStockItem: Product[];
    displayedColumns: string[] = [
        'name',
        'price',
        'stockCount',
        'sold',
        'lastMonthSold',
        'obrat',
    ];
    dataSource1: MatTableDataSource<Product> = new MatTableDataSource<Product>(
        []
    );
    dataSource2: MatTableDataSource<Product> = new MatTableDataSource<Product>(
        []
    );

    lastMonthSoldSum: number = 0;
    soldSum: number = 0;
    avgItemSum: number = 0;
    maxSoldItem: number = 0;
    maxSoldItemName: string;

    @ViewChild('paginator1') paginator1: MatPaginator;
    @ViewChild('paginator2') paginator2: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('matsort2') sort2: MatSort;

    ngOnInit(): void {
        this.dataFromServer();
    }

    dataFromServer() {
        this.productData.getProductList().then((products: any[]) => {
            this.dataToTable = products;

            this.dataSource1 = new MatTableDataSource(this.dataToTable);
            this.dataSource1.paginator = this.paginator1;
            this.dataSource1.sort = this.sort;

            this.emptyStockItem = this.dataToTable.filter((item) => {
                return item.stockCount === 0;
            });
            this.dataSource2 = new MatTableDataSource(this.emptyStockItem);
            this.dataSource2.paginator = this.paginator2;
            this.dataSource2.sort = this.sort2;

            this.dataToTable.forEach((element) => {
                this.lastMonthSoldSum += element.lastMonthSold * element.price!;
                this.soldSum += element.sold * element.price!;
                this.avgItemSum += Math.round(
                    element.price! / this.dataToTable.length
                );

                if (element.sold > this.maxSoldItem) {
                    this.maxSoldItem = element.sold;
                    this.maxSoldItemName = element.name;
                }
            });
        });
    }

    ngAfterViewInit() {}

    clearTable() {
        this.dataSource1.data = [];
    }

    addData() {
        this.dataSource1.data = this.dataToTable;
    }

    dataToTableUnderThousand: Product[] = [];
    checked: boolean = true;
    onChange() {
        console.log(this.checked);
        if (this.checked) {
            console.log(this.checked);
            this.dataToTable.forEach((element) => {
                if (element.price! <= 1000) {
                    this.dataToTableUnderThousand.push(element);
                }
                this.dataSource1.data = this.dataToTableUnderThousand;
                this.checked = false;
            });
        } else {
            this.dataSource1.data = this.dataToTable;
            this.dataToTableUnderThousand = [];
            this.checked = true;
        }
    }

    bestsellers() {
        this.dataSource1.data = this.productData.getBestseller();
    }
}
