import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';

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

/*@HostListener('window:scroll', ['$event'])
    getPosition($event) {
        console.log(this.productPosition.nativeElement.offsetTop)
        //this.x = this.productPosition?.nativeElement.offsetLeft;
        //this.y = this.productPosition?.nativeElement.offsetTop;

        const position = this.productPosition?.nativeElement.getBoundingClientRect()
        this.x = position.x.toFixed(0);
        this.y = position.y.toFixed(0);

    }*/
