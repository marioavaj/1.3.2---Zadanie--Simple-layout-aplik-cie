import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list: string[]=['C#', 'Java', 'JavaScript', 'Angular', '.NET Core', 'Go', 'Python', '.NET Framework', 'Spring', 'NativeScript', 'Android', 'Java', 'Java'];
  searchTerm: string = '';
  resultSet: string[]=[];

  ngOnInit(): void {

  }

filter(newValue: string): void{
  const result: string[] = [];
if(newValue.length>1){
  this.list.forEach((item:string) => {

    if(item.toLowerCase().match(newValue.toLowerCase())) {


      result.push(item);
      console.log(result)
    }
});
console.log(newValue)
  this.resultSet = result;
}
}
}




