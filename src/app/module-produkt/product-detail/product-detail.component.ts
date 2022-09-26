import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductServiceService } from "../../Services/product-service.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  

  constructor(private route: ActivatedRoute, private productData: ProductServiceService) {
    
   }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
  
  const productIdFromRoute = Number(routeParams.get('productId'));
 
  this.product = this.productData.getProductList().find((p) => p.id === productIdFromRoute);
  
  }

  

}
