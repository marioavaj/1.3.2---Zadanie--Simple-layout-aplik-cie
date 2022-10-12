import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';
import { ProductItems } from '../models/ProductItems';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {
    productData: Product[];
    productById: Product[];
    sortedData: Product[];
    private toLocalStorage: any;
    newStockCount = new BehaviorSubject<any>(0);
    cache: any;
    idCounter = 7;
    constructor() {}

    createNewProductInService(newProductData) {
        this.idCounter++;
        let price = parseInt(newProductData.price);
        const newProduct: any = {
            id: this.idCounter,
            name: newProductData.name.toString(),
            category: newProductData.category.toString(),
            price: parseInt(newProductData.price),
            stockCount: parseInt(newProductData.stockCount),
            sold: parseInt(newProductData.sold),
            lastMonthSold: parseInt(newProductData.lastMonthSold),
            description: newProductData.description.toString(),
        };

        console.log(newProduct);
        ProductItems.productData.push(newProduct);
    }

    getProductList(): Promise<any[]> {
        let fromLS = JSON.parse(localStorage.getItem('productData')!);
        this.productData = fromLS;

        return new Promise<Product[]>((resolve, rejecet) => {
            if (this.cache && this.cache == ProductItems.productData) {
                this.productData = this.cache;
                resolve(this.productData);
            } else
                setTimeout(() => {
                    this.productData = ProductItems.productData;
                    this.cache = this.productData;
                    resolve(this.productData);
                }, 2000);
        });
    }

    getProductById(id: number): Promise<any[]> {
        return new Promise<Product[]>((resolve, rejecet) => {
            setTimeout(() => {
                this.productData = ProductItems.productData;
                this.productData.forEach((element) => {
                    if (id === element.id) {
                        this.productById.push(element);
                    }
                });
                resolve(this.productData);
            }, 1000);
        });
    }

    getBestseller(): Product[] {
        function compare(a: Product, b: Product) {
            if (a.sold > b.sold) {
                return -1;
            }
            if (a.sold < b.sold) {
                return 1;
            }
            return 0;
        }

        this.sortedData = this.productData.sort(compare);

        return this.sortedData;
    }

    getproductBy(): Product[] {
        function compare(a: Product, b: Product) {
            if (a.sold > b.sold) {
                return -1;
            }
            if (a.sold < b.sold) {
                return 1;
            }
            return 0;
        }

        this.sortedData = this.productData.sort(compare);

        return this.sortedData;
    }

    minusStockCount(idProduct: number, newStockCount: number) {
        const indexOfObject = this.productData.findIndex((object) => {
            return object.id === idProduct;
        });
        this.productData[indexOfObject].stockCount = newStockCount;
        this.toLocalStorage = JSON.stringify(this.productData);
        localStorage.setItem('productData', this.toLocalStorage);
        this.newStockCount.next(this.productData);
    }

    plusStockCount(id: number, newStockCount: number) {
        const indexOfObject = this.productData.findIndex((object) => {
            return object.id === id;
        });
        this.productData[indexOfObject].stockCount = newStockCount;
        this.toLocalStorage = JSON.stringify(this.productData);
        localStorage.setItem('productData', this.toLocalStorage);
        this.newStockCount.next(this.productData);
    }

    deleteProduct(item: number) {
        const findedIndex = this.productData.findIndex(
            (array) => array.id === item
        );
        ProductItems.productData.splice(findedIndex, 1);
    }
}
