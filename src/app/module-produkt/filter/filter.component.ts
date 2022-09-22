import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    EventEmitter
} from '@angular/core';
import {Product} from '../../models/Product';

@Component( {selector: 'app-filter', templateUrl: './filter.component.html', styleUrls: ['./filter.component.css']})
export class FilterComponent
implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
    @Input()onStock : boolean = false;

    @Input('whereIsSearching')data : Product[];
    @Output()outputEvent : EventEmitter < any > = new EventEmitter<any>();

    @Input()whatIsSearched : string;
    resultSet : Product[];

    // zavola sa pred hocijakym life-hookom, ak ma komponent zavislosti, nacitaj ich do konstruktoru
    constructor() {}

    // prvy hook ale konstruktor sa vykonava skor, vykona sa iba vtedy ked je @input, vykona sa tolko krat kolko krat sa zavola @input, @outputu sa to netyka, zavola sa pred ngOnInit, vzdy ked sa zmeni hodnota premennych vstupujucich do komponentu, Poskytne objekt s predchadzajucou a novou hodnotou
    // AK NEMA KOMPONENTA ZIADNE INPUT TAK SA NEZAVOLA!!!!!!!!!!!!!!!!!!!!!!!
    // ZAVOLA SA NAD KAZDOU ZMENOU V KOMPONENTOCH, KTORE SU AKTUALNE VYKRESLENE V DOM
    ngOnChanges(): void {
        if (this.onStock === undefined) {
         this.onStock = false;
         }
        this.filter(this.whatIsSearched); 
    }

    // spusti sa po ngOnChanges, spusta sa iba raz!!!!!!!! este nie je nacitany html!!!!! Spracovanie pociatocnych dat, externe sluzby, asynchronne, idealne miesto pre inicializovanie dat z DB
    ngOnInit(): void {
        this.whatIsSearched = '';
    }

    // ideálne na implementovanie vlastných mechanizmov na detekovanie zmien, ktore ngOnChanges() nie je schobny detekovat.
    ngDoCheck() {
        
        
    }

    // iba pre komponent.Spusti sa 1x po ngDoCheck, po spusteni vsetkych ngcontentov a <app..., zavola sa ked vlastnosti zobrazovaneho komponentu su inicializovane
    ngAfterContentInit() {}

    // iba pre komponent, vola s po kazdej kontrole komponentu alebo direktivy aj vtedy ak sa ich obsah nezmenil
    ngAfterContentChecked() {}
    // interface iba pre komponent, zavola sa !x hned po afterContentInit() ked vlastnosti child template boli inicializovane
    ngAfterViewInit() {}
    // interface iba pre komponent, zavola sa vzdy ked angular zbada zmeny vo vlastnostiach  child komponentu. Uzitocne vtedy ak komponent ocakava nieco z child komponentu.
    ngAfterViewChecked() {}

    // Spusta sa 1x tesne predtym ako sa chysta angular zlikvidovat komponenntu alebo direktivu, treba riesit unsubscribe from observables, from DOM events, stop interval timers, unregister all callback. Posledna sanca ako poupratovat po komponente. Ak napr.komponent spusta externy servis, ktory sa pri zruseni komponentu tiez musi zrusit.
    ngOnDestroy() {}

    selectItem(item : string): void {
        this.whatIsSearched = item;
        this.resultSet = [];
    }

    filter(whatIsSearched : string): void {
        let result: Product[] = [];
console.log( "na zaciatku" +result)
        if ((this.data && whatIsSearched?.length >= 2 || (this.data && this.onStock === true)) ) {
            this.data.forEach((item) => {
                if (item.name.toLocaleLowerCase().includes(whatIsSearched.toLocaleLowerCase()) && this.onStock === false && item.stockCount >= 0) {
                    result.push(item);
                    this.outputEvent.emit(result);
                } else if (item.name.toLocaleLowerCase().includes(whatIsSearched.toLocaleLowerCase()) && this.onStock === true && item.stockCount > 0) 
                    result.push(item);

                
                this.outputEvent.emit(result);
            });

            this.resultSet = result;
        } else {
            this.resultSet = [];
            result = this.data;
        }

        this.outputEvent.emit(result);


    }
}
