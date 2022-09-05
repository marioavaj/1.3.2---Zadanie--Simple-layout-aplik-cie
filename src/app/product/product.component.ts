import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() data: Product;
  @Output() reviewAdd: EventEmitter<any> = new EventEmitter<any>();

  reviewFromInput:string;

public date = new Date().toLocaleString();//lokalny cas sformatovany

  constructor() {}



  ngOnInit(): void {


  }

  addReview(review:string){
    if(this.data){                   //kontrola ci premenna data existuje
      if(!this.data.reviews){        //kontrola ci v data existuje objekt reviews
        this.data.reviews = [];       //ak plati podmienka ze neexistuje, vytvori ho
      }
      this.data.reviews.push(review);
      this.reviewAdd.emit(review); // sprava pre parenta ze vlozil recenziu
      this.reviewFromInput = '';


    }
  }

}


