import { KartaZamestnanca } from './kartaZamestnanca';

export class Zamestnanec implements KartaZamestnanca {
    meno: string;
    prideleneNaradie?: string | undefined;
    pridelenyProjekt?: string | undefined;
    prideleneAuto?: string | undefined;

    constructor(meno: string, prideleneNaradie?: string | undefined, pridelenyProjekt?:string | undefined, prideleneAuto?: string | undefined ){
        this.meno = meno;
        this.prideleneNaradie = prideleneNaradie;
        this.pridelenyProjekt = pridelenyProjekt;
        this.prideleneAuto = prideleneAuto;
    }
}
