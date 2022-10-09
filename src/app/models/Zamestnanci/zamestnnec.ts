import { KartaZamestnanca } from './kartaZamestnanca';

export class Zamestnanec implements KartaZamestnanca {
    meno: string;
    PrideleneNaradie?: string | undefined;
    PridelenyProjekt?: string | undefined;
    prideleneAuto?: string | undefined;

    constructor(meno: string){
        this.meno = meno;
    }
}
