import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-option-my-product',
  templateUrl: './filter-option-my-product.component.html',
  styleUrls: ['./filter-option-my-product.component.scss']
})
export class FilterOptionMyProductComponent implements OnInit {

  @Input() myProductsFilter: boolean;
  @Output() myProductsFilterOutput: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  ngOnInit(): void {}

  myProductsOnChange(): void {
      this.myProductsFilter = !this.myProductsFilter;
      this.myProductsFilterOutput.emit(this.myProductsFilter);

  }
}
