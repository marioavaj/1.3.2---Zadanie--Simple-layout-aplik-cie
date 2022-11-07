import { Component, OnInit } from '@angular/core';
import { ModalAddEditProductComponent } from 'src/app/modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { ModalService } from 'src/app/Services/modal.service';
import { Product } from '../../models/Product';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-zoznam-produktov',
    templateUrl: './zoznam-produktov.component.html',
    styleUrls: ['./zoznam-produktov.component.scss'],
})
export class ZoznamProduktovComponent implements OnInit {
     productData: any;
     productList: any[];
    sortByClicked: boolean;
    lastReview: string;
    filteredData: Product[];
    onStockCheckBox: boolean;

    constructor(
        private productService: ProductServiceService,
        private modal: ModalService
    ) {}

    ngOnInit(): void {

      this.displayProducts();


    }

    lastReviewDisplayed(review: any, name: string): void {
        let date = new Date().toLocaleString();
        this.lastReview = date + ' na produkt ' + name + ': ' + review;
    }

    onFilterDone(item: Product[]) {
        this.filteredData = item;
    }
    inputCheckBox(onStock: boolean): void {
        this.onStockCheckBox = onStock;
    }

    isClicked() {
        this.sortByClicked = !this.sortByClicked;
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
