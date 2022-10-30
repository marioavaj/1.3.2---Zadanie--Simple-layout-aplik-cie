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
import { ModalService } from 'src/app/Services/modal.service';
import { ModalAddEditProductComponent } from 'src/app/modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() data: Product;
    @Output() reviewAdd: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('productPosition') productPosition: ElementRef<HTMLElement>;

    reviewFromInput: string;

    public clickedItem: Product;

    constructor(
        private createItem: ShopingCartServiceService,
        private newStockCount: ProductServiceService,
        private deleteItem: ProductServiceService,
        private upgradeItem: ProductServiceService,
        private dialog: ModalService
    ) {}

    ngOnInit(): void {}

    addReview(review: string) {
        if (review?.length > 0) {
            let date = new Date().toLocaleString();
            if (this.data) {
                // kontrola ci premenna data existuje
                if (!this.data.reviews) {
                    // kontrola ci v data existuje objekt reviews
                    this.data.reviews = []; // ak plati podmienka ze neexistuje, vytvori ho
                }
                this.data.reviews.push(date + ' | ' + review);
                this.reviewAdd.emit(review); // sprava pre parenta ze vlozil recenziu
                this.reviewFromInput = '';
            }
        }
    }

    addToCart() {
        this.createItem.putData(this.data);
        this.data.stockCount--;

        this.newStockCount.minusStockCount(this.data.id, this.data.stockCount);
    }

    deleteProduct(item: number) {
        this.deleteItem.deleteProduct(item);
    }

    editProduct(product: any) {
        const config = new MatDialogConfig();
        config.disableClose = true;
        config.data = product;
        this.dialog.openDialog(ModalAddEditProductComponent, config);
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
