import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import {ProductDetails} from '../../models/Product-details';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
  
  const productIdFromRoute = Number(routeParams.get('productId'));
 
  this.product = ProductDetails.productDetails.find((p) => p.id === productIdFromRoute);
  
  }

  

}
