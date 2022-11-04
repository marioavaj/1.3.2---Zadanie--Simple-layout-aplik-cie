import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    data?;

    constructor(
        private route: ActivatedRoute,
        private productData: ProductServiceService
    ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        console.log("data do detailu"+productIdFromRoute)

        this.productData.getProductById(productIdFromRoute).then(product => {
            this.data = product;
            console.log("data do detailu"+this.data.id)
        });

    }
}
