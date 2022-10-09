import { Amortizacia } from "./amortizacia";


export class Naradie extends Amortizacia {
    override nazov: string;

    constructor(nazovNaradia: string, evidencneCislo: number){
        super();
    this.nazov = nazovNaradia;
    this.evidencneCislo = evidencneCislo;
    }

    override vypocetAmortizacie(){};
}
