import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, Vendor } from '../models/Product';
import { ProductItems } from '../models/ProductItems';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {
    productData: Product[];
    productById: Product[];
    sortedData: Product[];
    private toLocalStorage: any;
    dataStream = new BehaviorSubject<any>(0);
    cache: any;
    idCounter = 7;
    constructor(
        private api: ApiService
    ) {}

    createNewProductInService(
        newProductData: any,
        newVendors: Vendor[],
        newReview: any,
        editMode: boolean,
        upgradedProduct: any
    ) {
        //create mode
        console.log(editMode);
        if (!editMode) {
            this.idCounter++;
            const newProduct: any = {
                id: this.idCounter,
                name: newProductData.name.toString(),
                category: newProductData.category.toString(),
                price: parseFloat(newProductData.price),
                stockCount: parseInt(newProductData.stockCount),
                sold: parseInt(newProductData.sold),
                lastMonthSold: parseInt(newProductData.lastMonthSold),
                description: newProductData.description.toString(),
                vendors: newVendors,
                reviews: newReview,
            };
            ProductItems.productData.push(newProduct);
        } else {
            //Edit mode
            ProductItems.productData.forEach((item) => {
                if (+upgradedProduct.id === item.id) {
                    item.name = newProductData.name.toString();
                    item.category = newProductData.category.toString();
                    item.price = parseFloat(newProductData.price);
                    item.stockCount = parseInt(newProductData.stockCount);
                    item.sold = parseInt(newProductData.sold);
                    item.lastMonthSold = parseInt(newProductData.lastMonthSold);
                    item.description = newProductData.description.toString();
                    item.vendors = newVendors;
                    item.reviews = newReview;
                    console.log(newVendors);

                                   }


            });

        }
    }

    getProductList(): Promise<any[]> {
        let fromLS = JSON.parse(localStorage.getItem('productData')!);
        this.productData = fromLS;

        return new Promise<Product[]>((resolve, reject) => {
            if (this.cache && this.cache == ProductItems.productData) {
                this.productData = this.cache;
                resolve(this.productData);
            } else

            this.api.get().toPromise().then((products)=>{

                this.productData = products;
                console.log(this.productData);

            });


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
                resolve(this.productById);
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
        this.dataStream.next(this.productData);
    }

    plusStockCount(id: number, newStockCount: number) {
        const indexOfObject = this.productData.findIndex((object) => {
            return object.id === id;
        });
        this.productData[indexOfObject].stockCount = newStockCount;
        this.toLocalStorage = JSON.stringify(this.productData);
        localStorage.setItem('productData', this.toLocalStorage);
        this.dataStream.next(this.productData);
    }

    deleteProduct(item: number) {
        const findedIndex = this.productData.findIndex(
            (array) => array.id === item
        );
        ProductItems.productData.splice(findedIndex, 1);
    }


}
