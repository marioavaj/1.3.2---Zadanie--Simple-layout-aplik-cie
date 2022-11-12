import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';
import { Product } from '../../models/Product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() data: Product;
    @ViewChild('productPosition') productPosition: ElementRef<HTMLElement>;
    manager: string | null;

    public clickedItem: Product;

    constructor(
        private createItem: ShopingCartServiceService,
        private productService: ProductServiceService,
        public user: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.user.authenticationStream.subscribe((data) => {
            if (data != false) {
                this.manager = 'Manager: ' + data;
            }
        });
    }

    addToCart() {
        this.createItem.putData(this.data);
        this.data.stockCount--;
        this.productService.minusStockCount(this.data.id, this.data.stockCount);
    }
}
