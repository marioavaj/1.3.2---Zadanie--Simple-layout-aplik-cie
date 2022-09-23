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
    
} from '@angular/core';


import {Product} from '../../models/Product';

@Component({selector: 'app-product', templateUrl: './product.component.html', 
styleUrls: ['./product.component.scss']})
export class ProductComponent
implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
    @Input()data : Product;
    @Output()reviewAdd : EventEmitter < any > = new EventEmitter<any>();

    @ViewChild('productPosition')productPosition : ElementRef < HTMLElement >;


    reviewFromInput : string;

    x : number;
    y : number;

    public date = new Date().toLocaleString(); // lokalny cas sformatovany

    constructor() {}
    ngOnChanges(changes : SimpleChanges): void {}
    ngAfterContentInit(): void {}
    ngAfterViewChecked(): void {}
    ngOnDestroy(): void {}
    ngAfterViewInit(): void {}
    ngDoCheck(): void {
        this.x = this.productPosition ?. nativeElement.offsetLeft;
        this.y = this.productPosition ?. nativeElement.offsetTop;
    }
    ngAfterContentChecked(): void {}

    ngOnInit(): void {}

    addReview(review : string) {
        if(review?.length>0){
        this.date = new Date().toLocaleString();
        if (this.data) { // kontrola ci premenna data existuje
            if (!this.data.reviews) { // kontrola ci v data existuje objekt reviews
                this.data.reviews = []; // ak plati podmienka ze neexistuje, vytvori ho
            }
            this.data.reviews.push(this.date + " | " + review);
            this.reviewAdd.emit(review); // sprava pre parenta ze vlozil recenziu
            this.reviewFromInput = '';
        }
    }
    }

    /*@HostListener('window:scroll', ['$event'])
    getPosition($event) {
        console.log(this.productPosition.nativeElement.offsetTop)
        //this.x = this.productPosition?.nativeElement.offsetLeft;
        //this.y = this.productPosition?.nativeElement.offsetTop;

        const position = this.productPosition?.nativeElement.getBoundingClientRect()
        this.x = position.x.toFixed(0);
        this.y = position.y.toFixed(0);

    }*/

}
