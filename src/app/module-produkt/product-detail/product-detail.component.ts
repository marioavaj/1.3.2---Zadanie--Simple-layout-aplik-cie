import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAddEditProductComponent } from 'src/app/modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';
import { Product } from 'src/app/models/Product';
import { ModalService } from 'src/app/Services/modal.service';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    data: any;
    productIdFromRoute: number;

    constructor(
        private route: ActivatedRoute,
        private productData: ProductServiceService,

        private deleteItem: ProductServiceService,
        private dialog: ModalService
    ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
        this.productData.getProductList();

        this.productData.getProductById(productIdFromRoute).then((product) => {
            this.data = product;
        });
    }

    deleteProduct(data: Product) {
        if (data.editPermission) {
            this.deleteItem.deleteProduct(data);

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


}
