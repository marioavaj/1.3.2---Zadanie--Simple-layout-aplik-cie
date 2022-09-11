import {
  Component,
  DoCheck,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: Product;
  @Output() reviewAdd: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('productPosition') productPosition: ElementRef;



  reviewFromInput: string;

  x: number;
  y: number;

  public date = new Date().toLocaleString(); //lokalny cas sformatovany

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("zmena doCheck")
    if (this.productPosition) {
      this.getPosition();
    }
  }
  ngAfterContentInit(): void {}
  ngAfterViewChecked(): void {}
  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}
  ngDoCheck(): void {

  }

  ngAfterContentChecked(): void {}

  ngOnInit(): void {}

  addReview(review: string) {
    if (this.data) {
      //kontrola ci premenna data existuje
      if (!this.data.reviews) {
        //kontrola ci v data existuje objekt reviews
        this.data.reviews = []; //ak plati podmienka ze neexistuje, vytvori ho
      }
      this.data.reviews.push(review);
      this.reviewAdd.emit(review); // sprava pre parenta ze vlozil recenziu
      this.reviewFromInput = '';
    }
  }

  getPosition() {
    this.x = this.productPosition.nativeElement.offsetLeft;
    this.y = this.productPosition.nativeElement.offsetTop;
  }
}
