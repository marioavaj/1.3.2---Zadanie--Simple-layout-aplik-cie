import { Component, OnInit } from '@angular/core';
import { Amortizacia } from '../models/Zamestnanci/amortizacia';
import { firemneAuta } from '../models/Zamestnanci/firemneAuta ';
import { KartaZamestnanca } from '../models/Zamestnanci/kartaZamestnanca';
import { Naradie } from '../models/Zamestnanci/naradie';
import { RozpracovaneProjetky } from '../models/Zamestnanci/rozprcacovaneProjekty';
import { Zamestnanec } from '../models/Zamestnanci/zamestnanec';
@Component({
    selector: 'app-zamestnanci',
    templateUrl: './zamestnanci.component.html',
    styleUrls: ['./zamestnanci.component.scss'],
})
export class ZamestnanciComponent implements OnInit {
    clickButton = false;
    name: string;
    pracovneProstriedky: Amortizacia[] = [
        new Naradie('vrtacka', 121),
        new Naradie('skrutkovac', 122),
        new Naradie('kladivo', 123),
        new Naradie('zbijacka', 124),
        new firemneAuta('fabia', 223),
        new firemneAuta('felicia', 222),
        new firemneAuta('octavia', 221),
        new firemneAuta('scala', 220),
    ];

    zoznamZamestnancov: KartaZamestnanca[] = [
        new Zamestnanec('Duro', 'vrtacka', 'dialnica D1', 'fabia'),
        new Zamestnanec('Jano', 'vrtacka', 'dialnica D1', 'fabia'),
        new Zamestnanec('Juro', 'vrtacka', 'dialnica D1', 'fabia'),
        new Zamestnanec('Dano', 'vrtacka', 'dialnica D1', 'fabia'),
    ];

    rozpracovaneProjekty: RozpracovaneProjetky[] = [
        new RozpracovaneProjetky('dialnica D1'),
        new RozpracovaneProjetky('rekonstrukcia skoly'),
        new RozpracovaneProjetky('chodnik'),
        new RozpracovaneProjetky('most'),
    ];

    constructor() {}

    ngOnInit(): void {}

    insertName(name: string) {
        const zamestnanec = new Zamestnanec(name);
        this.zoznamZamestnancov.push(zamestnanec);
    }

    zoznamPracovnychProstriedkov(): Amortizacia[] {
        return this.pracovneProstriedky;
    }
}