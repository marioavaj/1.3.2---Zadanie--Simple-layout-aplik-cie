import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Vendor } from 'src/app/models/Product';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
    vendorName;
    vendorCountStock;

    fullVendorFormat: Vendor[];
    fullReviewFormat: string[];
    oneVendor;
    vendors: any;
    review: any;

    productFormGroup = new FormGroup({
        name: new FormControl(''),
        category: new FormControl(''),
        price: new FormControl(''),
        stockCount: new FormControl(''),
        description: new FormControl(''),
        sold: new FormControl(''),
        lastMonthSold: new FormControl(''),
    });

    reviews = new FormControl('');

    constructor(private sendNewProduct: ProductServiceService) {}

    ngOnInit(): void {
        this.vendorName = new FormGroup({
            vendors: new FormArray([new FormControl()]),
            countStock: new FormArray([new FormControl()]),
        });
    }

    createNewProduct() {
        this.fullReviewFormat = [];
        const newProductData = this.productFormGroup.getRawValue();
        this.review = this.reviews.getRawValue();
        this.review = this.review.toString();
        this.fullReviewFormat.push(this.review);
        this.sendNewProduct.createNewProductInService(
            newProductData,
            this.fullVendorFormat,
            this.fullReviewFormat
        );

        alert(
            'Product with product name ' +
                newProductData.name +
                ' has been inserted into the database'
        );
    }

    addFormArray() {
        this.fullVendorFormat = [];
        this.vendorName.get('vendors').push(new FormControl());
        this.vendorName.get('countStock').push(new FormControl());
    }

sendFormArray(){
        let vendorsRawValue = this.vendorName.get('vendors').getRawValue();
        this.vendorCountStock = this.vendorName.get('countStock').getRawValue();

        for (let i = 0; i < vendorsRawValue.length; i++) {
            let oneVendor: Vendor = {
                name: vendorsRawValue[i],
                stockCount: parseInt(this.vendorCountStock[i]),
            };
            this.fullVendorFormat.push(oneVendor);
        }
        //this.fullVendorFormat = this.fullVendorFormat.filter((item: any) => {
        //    return item.name != null;
       // });
       console.log(this.fullReviewFormat)
    }
}
