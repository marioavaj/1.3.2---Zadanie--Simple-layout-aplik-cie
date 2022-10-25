import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Vendor } from 'src/app/models/Product';
import { compareSoldLastMonthSold } from 'src/app/Shared/directives/compareFormFields';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
    vendorName: any;
    fullVendorFormat: Vendor[];
    fullReviewFormat?: string[];

    productFormGroup = new UntypedFormGroup(
        {
            name: new FormControl('', Validators.required),
            category: new FormControl(''),
            price: new FormControl('', [
                Validators.required,
                Validators.min(0.0001),
            ]),
            stockCount: new FormControl('', Validators.required),
            description: new FormControl(''),
            sold: new FormControl('', Validators.required),
            lastMonthSold: new FormControl('', Validators.required),
        },
         compareSoldLastMonthSold
    );

    reviews = new FormControl();

    constructor(private sendNewProduct: ProductServiceService) {}

    ngOnInit(): void {
        this.vendorName = new FormGroup({
            vendors: new FormArray([new FormControl('')]),
            countStock: new FormArray([new FormControl('')]),
        });
    }



    createNewProduct() {
        this.productFormGroup.markAllAsTouched();
        this.productFormGroup.updateValueAndValidity();
        if (this.productFormGroup.valid && this.vendorName.valid) {
            this.fullReviewFormat = [];
            const newProductData = this.productFormGroup.getRawValue();
            let review = this.reviews.getRawValue();

            if (review !== null) {
                this.fullReviewFormat.push(review);
            }

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
        } else alert('Form is invalid');
    }

    addFormArray() {
        this.vendorName.get('vendors').push(new FormControl());
        this.vendorName.get('countStock').push(new FormControl());
    }

    sendFormArray() {
        this.fullVendorFormat = [];
        let vendorsRawValue = this.vendorName.get('vendors').getRawValue();
        let vendorCountStock = this.vendorName.get('countStock').getRawValue();

        for (let i = 0; i < vendorsRawValue.length; i++) {
            let oneVendor: Vendor = {
                name: vendorsRawValue[i],
                stockCount: parseInt(vendorCountStock[i]),
            };
            this.fullVendorFormat.push(oneVendor);
            console.log(this.fullReviewFormat);
        }
    }
}
