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
    fullReviewFormat?: string[];
    upgradedProduct?: Product;
    editMode: boolean;

    productFormGroup = new FormGroup(
        {
            name: new FormControl('', Validators.required),
            category: new FormControl(''),
            price: new FormControl('', [
                Validators.required,
                Validators.min(0.0001),
            ]),
            stockCount: new FormControl('', [
                Validators.required,
                Validators.min(0),
            ]),
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

    reviews = new FormControl();

    constructor(
        private dataFromService: ProductServiceService,
        private dialogRef: MatDialogRef<ModalAddEditProductComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product
    ) {
        this.upgradedProduct = data;
    }

    ngOnInit(): void {
        this.vendorName = new FormGroup({
            vendors: new FormArray([new FormControl('')]),
            countStock: new FormArray([new FormControl('')]),
        });

        if (this.upgradedProduct) {
            this.editMode = true;
            if (this.upgradedProduct.vendors?.length == 0) {
                this.vendorName = new FormGroup({
                    vendors: new FormArray([new FormControl('')]),
                    countStock: new FormArray([new FormControl('')]),
                });
            } else
                this.vendorName = new FormGroup({
                    vendors: new FormArray([]),
                    countStock: new FormArray([]),
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
                ?.setValue(this.upgradedProduct.sold.toLocaleString());
            this.productFormGroup
                .get('lastMonthSold')
                ?.setValue(this.upgradedProduct.lastMonthSold.toLocaleString());
            if (
                this.upgradedProduct.vendors &&
                this.upgradedProduct.vendors.length
            ) {
                this.upgradedProduct.vendors.forEach((element) => {
                    this.vendorName
                        .get('vendors')
                        .push(new FormControl(element.name));
                    this.vendorName
                        .get('countStock')
                        .push(new FormControl(element.stockCount));
                });
            }
        } else this.editMode = false;
    }

    closeModal() {

        this.dialogRef.close();
    }

    cancelModal(){
        alert('Operation has been canceled');
        this.dialogRef.close();
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
            this.sendFormArray();
            this.dataFromService.createNewProductInService(
                newProductData,
                this.fullVendorFormat,
                this.fullReviewFormat,
                this.editMode,
                this.upgradedProduct
            );

            if (!this.editMode) {
                alert(
                    'Product with product name ' +
                        newProductData.name +
                        ' has been inserted into the database'
                );
            } else {
                alert(
                    'Product with product name ' +
                        newProductData.name +
                        ' HAS BEEN UPDATED'
                );
            }

            this.closeModal();
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
        console.log(this.fullVendorFormat);

        for (let i = 0; i < vendorsRawValue.length; i++) {
            let oneVendor: Vendor = {
                name: vendorsRawValue[i],
                stockCount: parseInt(vendorCountStock[i]),
            };
            this.fullVendorFormat.push(oneVendor);
        }
    }
}
