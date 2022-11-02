import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Product, Vendor } from '../models/Product';
import { ProductItems } from '../models/ProductItems';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {
    productData: any;
    productById: Product[];
    sortedData: Product[];
    private toLocalStorage: any;
    dataStream = new BehaviorSubject<any>(0);
    cache: any;
    idCounter = 99999;
    constructor(private api: ApiService) {}

    createNewProductInService(
        newProductData: any,
        newVendors: Vendor[],
        newReview: any,
        editMode: boolean,
        upgradedProduct: any
    ) {
        //create mode
        if (!editMode) {
            this.idCounter++;
            const newProduct: any = {
                id: this.idCounter,
                uuid: this.idCounter+100,
                name: newProductData.name.toString(),
                description: newProductData.description.toString(),
                category: newProductData.category.toString(),
                price: parseFloat(newProductData.price),
                stockCount: parseInt(newProductData.stockCount),
                sellCountOverall: parseInt(newProductData.sold),
                sellCountLastMonth: parseInt(newProductData.lastMonthSold),
                editPermission: false,
                reviews:["test"],
                vendors: newVendors,
                //vendors: newVendors,
                // reviews: newReview,
            };

            console.log(newProduct);

            this.api.post(newProduct).subscribe((product) => {
                this.productData.push(product);
            });

            //ProductItems.productData.push(newProduct);
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

        return new Promise<any[]>((resolve, reject) => {
            if (this.cache && this.cache.length == this.productData.length) {
                this.productData = this.cache;
                resolve(this.productData);
            } else
                this.api
                    .get()
                    .pipe(take(1))
                    .subscribe((products) => {
                        //pite(take(1)) - vykona subacribe 1x, netreba unsubscibe (toPromise() je depricated)
                        this.productData = products;
                        console.log(this.productData);

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
                            };
                        });

                        this.cache = this.productData; //naplni cache
                        console.log(this.productData);
                        resolve(this.productData);
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

    updateKeysfromApi(apiData: any): void {
        const id = apiData.id;
        const name = apiData.name;
        const category = apiData.category;
        const price = apiData.price;
        const stockCount = apiData.stockCount;
        const sold = apiData.SellCountOverall;
        const lastMonthSold = apiData.SellCountLastMonth;
        const description = apiData.Description;
    }
}
