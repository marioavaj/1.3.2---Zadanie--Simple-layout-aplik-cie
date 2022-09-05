import { Component, OnInit, Input, Output, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



  @Input('whereIsSearching') data: Product[];
  @Output ()

  whatIsSearched: string;
  resultSet: string[];

  constructor() {}

//prvy hook ale konstruktor sa vykonava prvy, vzkona sa iba vtedy ked je @input, vzkona sa tolko krat kolko krat sa zavola @input, @outputu sa to netyka
  ngOnChanges() {}


  //spusti sa po ngOnChanges, spusta sa iba raz!!!!!!!! este nie je nacitany html!!!!! Spracovanie pociatocnych dat, externe sluzby, asznchronne
  ngOnInit(): void {}

  //ideálne na implementovanie vlastných mechanizmov na detekovanie zmien, ktore ngOnChanges() nie je schobny detekovat.
    ngDoCheck() {



  }

  //spusti sa 1x po ngDoCheck, po spusteni vsetkych ngcontentov a <app...
  ngAfterContentInit() {}


  ngAfterContentChecked() {}

  ngAfterViewInit() {}

  ngAfterViewChecked() {}

  //Spusta sa predtym ako sa chysta angular zlikvidovat komponenntu alebo direktivu, treba riesit unsubscribe from observables, from DOM events, stop interval timers, unregister all callback
  ngOnDestroy() {}

  selectItem(item:string):void{

this.whatIsSearched=item;
this.resultSet = [];
  }

  filter(whatIsSearched: string): void {
    const result: string[] = [];
    if (whatIsSearched.length > 1) {
      this.data.forEach((item) => {
        if (
          item.name
            .toLocaleLowerCase()
            .includes(whatIsSearched.toLocaleLowerCase())
        ) {
          result.push(item.name);
        }
      });

      this.resultSet = result;
      console.log('najdene  ' + this.resultSet);
    } else this.resultSet = [];
  }
}
