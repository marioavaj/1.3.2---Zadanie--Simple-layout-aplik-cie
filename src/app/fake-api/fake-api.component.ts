import {Component, OnInit} from '@angular/core';
import { KartaZamestnanca } from '../models/kartaZamestnanca';
import { Zamestnanec } from '../models/zamestnnec';


@Component({selector: 'app-fake-api', templateUrl: './fake-api.component.html', styleUrls: ['./fake-api.component.scss']})
export class FakeApiComponent implements OnInit {

    meno:string;
    zamestnanci: any[] = [];



    constructor() {}

    ngOnInit(): void {
     


    }

    
pridaj(value){
  
  const zamestnanecObj =  new Zamestnanec();
  zamestnanecObj.meno = value;
  zamestnanecObj.PrideleneNaradie = "ziadne";
    this.zamestnanci.push(zamestnanecObj);
  
  console.log(this.zamestnanci);
  }


}
