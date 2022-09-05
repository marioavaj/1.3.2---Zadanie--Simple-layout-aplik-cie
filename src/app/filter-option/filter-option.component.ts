import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  onStockCheckBox:boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }



  onChange(item:any):void{
    this.onStockCheckBox = !this.onStockCheckBox;
    console.log(this.onStockCheckBox);

  }

}
