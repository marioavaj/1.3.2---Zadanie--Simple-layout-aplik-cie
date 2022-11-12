import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalAddEditProductComponent } from 'src/app/modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { Product } from 'src/app/models/Product';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ModalService } from 'src/app/Services/modal.service';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    productIdFromRoute: number;
    reviewFromInput: string;

    @Input() data: any;
    @Output() reviewAdd: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('productPosition') productPosition: ElementRef<HTMLElement>;
    isLogged: any;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductServiceService,
        private dialog: ModalService,
        private createItem: ShopingCartServiceService,
        private isLoggedService: AuthenticationService,

    ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
        this.productService.getProductList();

        this.productService.productDataObservable.subscribe((newValue) => {
            this.data = newValue; //AKTUALIZUJE DATA V DETAILY PRODUKTU PO UPDATE UDAJOV
        });

        this.productService
            .getProductById(productIdFromRoute)
            .then((product) => {
                this.data = product;
            });

            this.isLoggedService.authenticationStream.subscribe((value) => {
                this.isLogged = value;
            });
    }

    deleteProduct(data: Product) {
        console.log(data.editPermission)
        if (data.editPermission) {
            this.productService.deleteProduct(data);
        } else alert('You have not permission to delete this product');
    }

    editProduct(product: Product) {
        if (product.editPermission) {
            const config = new MatDialogConfig();
            config.disableClose = true;
            config.data = product;
            this.dialog.openDialog(ModalAddEditProductComponent, config);
        } else alert('You have not permission to edit this product');
    }

    addToCart() {
        this.createItem.putData(this.data);
        this.data.stockCount--;
        this.productService.minusStockCount(this.data.id, this.data.stockCount);
    }

    addReview(review: string) {
        if (review?.length > 0) {
            let date = new Date().toLocaleString();
            if (this.data) {
                // kontrola ci premenna data existuje
                if (!this.data.reviews) {
                    // kontrola ci v data existuje objekt reviews
                    this.data.reviews = []; // ak plati podmienka ze neexistuje, vytvori ho
                }
                this.data.reviews.push(date + ' | ' + review).toLocaleString();
                console.log(this.data.reviews);

                this.productService.addReviews(this.data);

                this.reviewAdd.emit(review); // sprava pre parenta ze vlozil recenziu
                this.reviewFromInput = '';
            }
        }
    }
}
