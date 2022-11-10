import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-option',
    templateUrl: './filter-option.component.html',
    styleUrls: ['./filter-option.component.scss'],
})
export class FilterOptionComponent implements OnInit {

    @Input() onStockCheckBox: boolean;
    @Output() checkBoXInput: EventEmitter<any> = new EventEmitter<any>();




    constructor() {}

    ngOnInit(): void {}

    onChange(): void {
        this.onStockCheckBox = !this.onStockCheckBox;
        this.checkBoXInput.emit(this.onStockCheckBox);

    }



}
