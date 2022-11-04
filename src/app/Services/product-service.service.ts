import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import {
    newProductToApi,
    Product,
    Vendor,
    VendorsInApi,
} from '../models/Product';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {
    productData: any;
    productById: Product[];
    sortedData: Product[];
    dataStream = new BehaviorSubject<any>(0);
    cache: any;
    idCounter = 99999;
    vendorToApi: VendorsInApi[] = [];

    constructor(private api: ApiService) {}

    createNewProductInService(
        newProductData: any,
        newVendors: Vendor[],
        newReview: string[],
        editMode: boolean,
        upgradedProduct: any
    ) {
        newVendors.forEach((item) => {
            this.vendorToApi.push({
                id: this.idCounter + 101,
                uuid: (this.idCounter + 1000).toString(),
                name: item.name,
                stockCount: item.stockCount,
            });
        });

        console.log(this.vendorToApi);

        //create mode
        if (!editMode) {
            this.idCounter++;
            const newProduct: newProductToApi = {
                id: this.idCounter,
                uuid: (this.idCounter + 100).toString(),
                name: newProductData.name,
                price: parseFloat(newProductData.price),
                category: newProductData.category,
                description: newProductData.description,
                stockCount: parseInt(newProductData.stockCount),
                sellCountOverall: parseInt(newProductData.sold),
                sellCountLastMonth: parseInt(newProductData.lastMonthSold),
                vendors: this.vendorToApi,
                reviews: newReview,
            };

            this.api
                .post(newProduct)
                .pipe(take(1))
                .subscribe(() => {
                    location.reload();
                });
        } else {
            //Edit mode
            let productToApi = {};
            this.productData.forEach((item) => {
                if (+upgradedProduct.id === item.id) {
                    productToApi = {
                        name: newProductData.name.toString(),
                        category: newProductData.category.toString(),
                        price: parseFloat(newProductData.price),
                        stockCount: parseInt(newProductData.stockCount),
                        sellCountOverall: parseInt(newProductData.sold),
                        sellCountLastMonth: parseInt(
                            newProductData.lastMonthSold
                        ),
                        description: newProductData.description.toString(),
                        vendors: newVendors,
                        reviews: newReview,
                    };
                }
            });
            this.api
                .put(upgradedProduct.id, productToApi)
                .pipe(take(1))
                .subscribe(() => {
                    location.reload();
                });
        }
    }

    getProductList(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            if (this.cache) {
                this.productData = this.cache;
                resolve(this.productData);
            } else
                this.api
                    .get()
                    .pipe(take(1))
                    .subscribe((products) => {
                        //pipe(take(1)) - vykona subs cribe 1x, netreba unsubscibe (toPromise() je depricated)
                        this.productData = products;
                        //namapuje data z api do formatu pre zobrazenie
                        this.productData = this.productData.map((apiData) => {
                            return {
                                id: apiData.id,
                                name: apiData.name,
                                category: apiData.category,
                                price: apiData.price,
                                stockCount: apiData.stockCount,
                                sold: apiData.sellCountOverall,
                                lastMonthSold: apiData.sellCountLastMonth,
                                description: apiData.description,
                                Vendors: apiData.vendors
                            };
                        });

                        resolve(this.productData);
                    });

            this.cache = this.productData; //naplni cache
        });
    }

    getProductById(id: number): Promise<any[]> {
        return new Promise<Product[]>((resolve, rejecet) => {});
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

        this.dataStream.next(this.productData);
    }

    plusStockCount(id: number, newStockCount: number) {
        const indexOfObject = this.productData.findIndex((object) => {
            return object.id === id;
        });
        this.productData[indexOfObject].stockCount = newStockCount;

        this.dataStream.next(this.productData);
    }

    deleteProduct(item: any) {
        const findedIndex = this.productData.findIndex(
            (array) => array.id === item
        );
        console.log(item);

        this.api.delete(item).pipe(take(1)).subscribe();

        //ProductItems.productData.splice(findedIndex, 1);
    }
}
