import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';


@Pipe({
  name: 'sortByPipe'

  
})
export class SortByPipePipe implements PipeTransform {
  productList:any;

  sortBy: boolean;
  private cache: any;
  sortedData:Product[];

  transform(value: any[], args: boolean): any {
    if(value !== this.cache){
      this.cache = this.newValue(value, args)
    }
    return this.cache
  }
  newValue(productList: any[], args: boolean ):any{
   let value = args ;
   this.productList=productList;
    if(value === false){
    function compare( a:Product, b:Product ) {
     
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
     }
    
    this.sortedData = this.productList.sort( compare);
    console.log(this.sortedData);
  }else {
    function compare( a:Product, b:Product ) {

     
      if ( a.name > b.name ){
        return -1;
      }
      if ( a.name < b.name ){
        return 1;
      }
      return 0;
     }
    
    this.sortedData = this.productList.sort( compare);
    console.log(this.sortedData);
}  
}
    
}
