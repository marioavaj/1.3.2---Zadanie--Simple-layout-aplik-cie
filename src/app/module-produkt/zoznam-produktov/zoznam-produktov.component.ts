import { Component, OnInit } from '@angular/core';
import { ModalAddEditProductComponent } from 'src/app/modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ModalService } from 'src/app/Services/modal.service';
import { Product } from '../../models/Product';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-zoznam-produktov',
    templateUrl: './zoznam-produktov.component.html',
    styleUrls: ['./zoznam-produktov.component.scss'],
})
export class ZoznamProduktovComponent implements OnInit {
    productData: Product[];
    productList: Product[];
    sortByClicked: boolean;
    lastReview: string;
    filteredData: Product[];
    onStockCheckBox: boolean;
    myProducts: boolean;
    isLogged: boolean;
    myproductClicked: boolean;



    constructor(
        private productService: ProductServiceService,
        private modal: ModalService,
        private isLoggedService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.displayProducts();
        this.isLoggedService.authenticationStream.subscribe((value) => {
            this.isLogged = value;

        });
    }

    onFilterDone(item: Product[]) {
        this.filteredData = item;
    }
    inputCheckBox(onStock: boolean): void {
        this.onStockCheckBox = onStock;
    }

    myProductsCheckBox(myProducts: boolean) {
        this.myProducts = myProducts;
    }

    isClicked() {
        this.sortByClicked = !this.sortByClicked;
    }
    myProductIsClicked() {
        this.myproductClicked = !this.myproductClicked;
    }

    openModalNewProduct() {
        this.modal.openDialog(ModalAddEditProductComponent);
    }

    displayProducts() {
        this.productService.getProductList().then((products: any[]) => {
            this.productList = products;
        });
        this.filteredData = this.productList;
        this.sortByClicked = false;
    }


}
