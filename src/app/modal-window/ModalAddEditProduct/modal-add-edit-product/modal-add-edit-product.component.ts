import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, Vendor } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { compareSoldLastMonthSold } from 'src/app/Shared/directives/compareFormFields';

@Component({
    selector: 'app-modal-add-edit-product',
    templateUrl: './modal-add-edit-product.component.html',
    styleUrls: ['./modal-add-edit-product.component.scss'],
})
export class ModalAddEditProductComponent implements OnInit {
    vendorName: any;
    fullVendorFormat: Vendor[];
    fullReviewFormat: any;
    upgradedProduct?: any;
    editMode: boolean;
    reviewsGroup: any;

    productFormGroup = new FormGroup(
        {
            name: new FormControl('', Validators.required),
            category: new FormControl(''),
            price: new FormControl('', [
                Validators.required,
                Validators.min(0.0001),
            ]),
            stockCount: new FormControl('', []),
            description: new FormControl(''),
            sold: new FormControl('', [Validators.required, Validators.min(0)]),
            lastMonthSold: new FormControl('', [
                Validators.required,
                Validators.min(0),
            ]),
        },
        {
            validators: [compareSoldLastMonthSold],
            updateOn: 'blur',
        }
    );

    constructor(
        private dataFromService: ProductServiceService,
        private dialogRef: MatDialogRef<ModalAddEditProductComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product //namapuje data z produktu do dialogoveho okna
    ) {
        this.upgradedProduct = data;
    }

    ngOnInit(): void {
        this.vendorName = new FormGroup({
            vendors: new FormArray([new FormControl('', Validators.required)]),
            countStock: new FormArray([
                new FormControl('', Validators.required),
            ]),
        });

        this.reviewsGroup = new FormGroup({
            reviews: new FormArray([new FormControl('')]),
        });

        if (this.upgradedProduct) {
            this.editMode = true;
            if (this.upgradedProduct.vendors?.length == 0) {
                this.vendorName = new FormGroup({
                    vendors: new FormArray([
                        new FormControl('', Validators.required),
                    ]),
                    countStock: new FormArray([
                        new FormControl('', Validators.required),
                    ]),
                });
            } else
                this.vendorName = new FormGroup({
                    vendors: new FormArray([]),
                    countStock: new FormArray([]),
                });

            if (this.upgradedProduct.reviews?.length == 0) {
                this.reviewsGroup = new FormGroup({
                    reviews: new FormArray([new FormControl('')]),
                });
            } else
                this.reviewsGroup = new FormGroup({
                    reviews: new FormArray([]),
                });

            this.productFormGroup
                .get('name')
                ?.setValue(this.upgradedProduct.name);
            this.productFormGroup
                .get('category')
                ?.setValue(this.upgradedProduct.category);
            this.productFormGroup
                .get('price')
                ?.setValue(this.upgradedProduct.price!.toLocaleString());
            this.productFormGroup
                .get('stockCount')
                ?.setValue(this.upgradedProduct.stockCount.toLocaleString());
            this.productFormGroup
                .get('description')
                ?.setValue(this.upgradedProduct.description!.toLocaleString());
            this.productFormGroup
                .get('sold')
                ?.setValue(
                    this.upgradedProduct.sellCountOverall.toLocaleString()
                );
            this.productFormGroup
                .get('lastMonthSold')
                ?.setValue(
                    this.upgradedProduct.sellCountLastMonth.toLocaleString()
                );
            if (
                this.upgradedProduct.vendors &&
                this.upgradedProduct.vendors.length
            ) {
                //naplni data vendorov do modalneho okna
                this.upgradedProduct.vendors.forEach((element) => {
                    this.vendorName
                        .get('vendors')
                        .push(
                            new FormControl(element.name, Validators.required)
                        );
                    this.vendorName
                        .get('countStock')
                        .push(
                            new FormControl(
                                element.stockCount,
                                Validators.required
                            )
                        );
                });
                //naplni data reviews do modalneho okna
                if (this.upgradedProduct.reviews) {
                    this.upgradedProduct.reviews.forEach((element) => {
                        this.reviewsGroup
                            .get('reviews')
                            .push(new FormControl(element));
                    });
                }
            }
        } else this.editMode = false;
    }

    closeModal() {
        this.dialogRef.close();
    }

    cancelModal() {
        this.dialogRef.close();
    }

    createNewProduct() {
        this.productFormGroup.markAllAsTouched();
        this.productFormGroup.updateValueAndValidity();
        this.vendorName.markAllAsTouched();
        this.vendorName.updateValueAndValidity();

        if (this.productFormGroup.valid && this.vendorName.valid) {
            const newProductData = this.productFormGroup.getRawValue();

            this.sendFormArrayVendors();
            this.sendFormArrayReviews();

            this.dataFromService.createNewProductInService(
                newProductData,
                this.fullVendorFormat,
                this.fullReviewFormat,
                this.editMode,
                this.upgradedProduct
            );

            this.closeModal();
        } else alert('Form is invalid');
    }

    addFormArrayVendors() {
        this.vendorName
            .get('vendors')
            .push(new FormControl('', Validators.required));
        this.vendorName
            .get('countStock')
            .push(new FormControl('', Validators.required));
    }

    addFormArrayReviews() {
        this.reviewsGroup.get('reviews').push(new FormControl(''));
    }

    sendFormArrayReviews() {
        this.fullReviewFormat = [];
        let date = new Date().toLocaleString();
        let reviewRawValue = this.reviewsGroup.get('reviews').getRawValue();
        console.log(reviewRawValue);
        for (let i = 0; i < reviewRawValue.length; i++) {
            let oneReview: string = reviewRawValue[i];
            if (reviewRawValue != '') {
                if (!oneReview.includes('|') && reviewRawValue != '') {
                    this.fullReviewFormat.push(date + ' | ' + oneReview);
                } else this.fullReviewFormat.push(oneReview);
            }
        }
    }

    sendFormArrayVendors() {
        this.fullVendorFormat = [];
        let vendorsRawValue = this.vendorName.get('vendors').getRawValue();
        let vendorCountStock = this.vendorName.get('countStock').getRawValue();

        for (let i = 0; i < vendorsRawValue.length; i++) {
            let oneVendor: Vendor = {
                name: vendorsRawValue[i],
                stockCount: parseInt(vendorCountStock[i]),
            };
            this.fullVendorFormat.push(oneVendor);
        }
    }
}
