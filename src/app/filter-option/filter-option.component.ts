import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  @Input() onStockCheckBox:boolean;
  @Output() checkBoXInput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }



  onChange(item:any):void{
    this.onStockCheckBox = !this.onStockCheckBox;
    this.checkBoXInput.emit(this.onStockCheckBox);

  }

}
