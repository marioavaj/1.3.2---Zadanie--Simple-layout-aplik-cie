import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
    productName = new FormControl('');
    category = new FormControl('');
    productPrice = new FormControl('');
    stockCount = new FormControl('');
    description = new FormControl('');
    soldTotal = new FormControl('');
    soldLastMont = new FormControl('');
    counter = 7;

    constructor() {}

    ngOnInit(): void {}
    createNewProduct() {
        this.counter++;
        const newproduct = {
            id: this.counter,
            name: this.productName.value,
            category: this.category.value,
            price: this.productPrice.value,
            stockCount: this.stockCount.value,
            sold: this.soldTotal.value,
            lastMonthSold: this.soldLastMont.value,
            description: this.description.value,
            vendors: [],
            reviews: [],
        };
        console.log(newproduct);
    }
}
