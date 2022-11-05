import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    cache: Product[];
    vendorToApi: VendorsInApi[];
    productDataObservable = new BehaviorSubject<Product[]>([]); //aktualzacia udajov po zmene na API(PUT,DELETE,POST)

    constructor(private api: ApiService, private router: Router) {}

    createNewProductInService(
        newProductData: any,
        newVendors: Vendor[],
        newReview: string[],
        editMode: boolean,
        upgradedProduct: any
    ) {
        this.vendorToApi = [];
        newVendors.forEach((item) => {
            this.vendorToApi.push({
                uuid: this.generateUuid(),
                name: item.name,
                stockCount: item.stockCount,
            });
        });

        //create mode
        if (!editMode) {
            const newProduct: newProductToApi = {
                uuid: this.generateUuid(),
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

            console.log(newProduct);

            this.api
                .post(newProduct)
                .toPromise()
                .then((productFromApi) => {
                    //thn vrati respons s vlozenim produktom.
                    alert(
                        'New product with name ' +
                            newProductData.name +
                            ' has been created'
                    );
                    this.productData.push(productFromApi); //doplni do zoznamu produktov po vlozeni do databazy
                })
                .catch(() => {
                    alert(
                        'Something wrong ' +
                            newProductData.name +
                            ' has not been created. Try later. '
                    );
                });
        } else {
            //Edit mode

            let productToApi = {};
            this.productData.forEach((item: Product) => {
                if (+upgradedProduct.id === item.id) {
                    productToApi = {
                        uuid: this.generateUuid(),
                        name: newProductData.name.toString(),
                        category: newProductData.category.toString(),
                        price: parseFloat(newProductData.price),
                        stockCount: parseInt(newProductData.stockCount),
                        sellCountOverall: parseInt(newProductData.sold),
                        sellCountLastMonth: parseInt(
                            newProductData.lastMonthSold
                        ),
                        description: newProductData.description.toString(),
                        vendors: this.vendorToApi,
                        reviews: newReview,
                    };
                }
            });

            this.api
                .put(upgradedProduct.id, productToApi)
                .toPromise()
                .then((productFromApi) => {
                    let index;
                    index = this.productData.findIndex((item) => {
                        if (productFromApi!.id == item!.id) {
                            item[index] = productFromApi;
                        }
                    });

                    alert(
                        'Product with product name ' +
                            newProductData.name +
                            ' has been updated'
                    );
                    location.reload();

                    // upgrade produktu v produkt data
                })
                .catch((err) => {
                    console.log(err);
                });


        }
    }

    deleteProduct(data: Product) {
        if (
            confirm('Do you really want to delete product ' + data.name + ' ?')
        ) {
            this.api
                .delete(data.id)
                .toPromise()
                .then((dataFromApi?) => {
                    const index = this.productData.findIndex((item) => {
                        if (dataFromApi?.id == item.id) {
                            this.productData.splice(index, 1);

                            alert('Product' + data.name + ' has been deleted');
                        }
                    });
                })
                .catch((err) => {
                    console.log(err);
                    // delete produktu z productdata
                });
        }
        this.router.navigate(['/zoznam-produktov']);
    }

    getProductList(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            if (this.cache && this.cache.length == this.productData.length) {
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
                                Vendors: apiData.vendors,
                                editPermission: apiData.editPermission,
                            };
                        });

                        resolve(this.productData);
                    });

            this.cache = this.productData; //naplni cache
            this.productDataObservable.next(this.productData); //observable
        });
    }

    getProductById(id: number): Promise<any[]> {
        return new Promise<Product[]>((resolve, rejecet) => {
            this.api
                .getById(id)
                .pipe(take(1))
                .subscribe((productByIdFromApi) => {
                    this.productById = productByIdFromApi;

                    resolve(this.productById);
                });
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

        this.dataStream.next(this.productData);
    }

    plusStockCount(id: number, newStockCount: number) {
        const indexOfObject = this.productData.findIndex((object) => {
            return object.id === id;
        });
        this.productData[indexOfObject].stockCount = newStockCount;

        this.dataStream.next(this.productData);
    }

    generateUuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }
}
