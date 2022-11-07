import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';
import { Product } from '../../models/Product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() data: any;
    @ViewChild('productPosition') productPosition: ElementRef<HTMLElement>;

    public clickedItem: Product;

    constructor(
        private createItem: ShopingCartServiceService,
        private productService: ProductServiceService
    ) {}

    ngOnInit(): void {}

    addToCart() {
        this.createItem.putData(this.data);
        this.data.stockCount--;
        this.productService.minusStockCount(this.data.id, this.data.stockCount);
    }
}
