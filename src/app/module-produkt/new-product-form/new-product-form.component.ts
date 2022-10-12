import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
    productFormGroup = new FormGroup({
        name: new FormControl(''),
        category: new FormControl(''),
        price: new FormControl(''),
        stockCount: new FormControl(''),
        description: new FormControl(''),
        sold: new FormControl(''),
        lastMonthSold: new FormControl(''),
         });

         vendors = new FormControl('');
         reviews = new FormControl('');

    constructor(private sendNewProduct: ProductServiceService) {}

    ngOnInit(): void {}

    createNewProduct() {
        const newProductData = this.productFormGroup.getRawValue();
        this.sendNewProduct.createNewProductInService(newProductData);
        alert(
            'Product with product name ' +
                newProductData.name +
                ' has been entered into the database'
        );
    }
}
