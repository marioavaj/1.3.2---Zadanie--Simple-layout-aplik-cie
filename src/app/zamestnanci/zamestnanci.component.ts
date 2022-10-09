import { Component, OnInit } from '@angular/core';
import { KartaZamestnanca } from '../models/Zamestnanci/kartaZamestnanca';
import { Zamestnanec } from '../models/Zamestnanci/zamestnnec';
@Component({
  selector: 'app-zamestnanci',
  templateUrl: './zamestnanci.component.html',
  styleUrls: ['./zamestnanci.component.scss']
})
export class ZamestnanciComponent implements OnInit {

    name: string;

    zoznamZamestnancov: KartaZamestnanca[] = [
        new Zamestnanec("Duro"),
        new Zamestnanec("Jano"),
        new Zamestnanec("Juro"),
        new Zamestnanec("Dano"),
    ];

  constructor() { }

  ngOnInit(): void {
  }

  insertName(name:string){
   const  zamestnanec  = new Zamestnanec(name);
   this.zoznamZamestnancov.push(zamestnanec);
   console.log(this.zoznamZamestnancov);

  }

}
