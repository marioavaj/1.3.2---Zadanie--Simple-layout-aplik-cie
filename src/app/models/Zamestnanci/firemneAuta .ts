import { Amortizacia } from "./amortizacia";

export class firemneAuta  extends Amortizacia {

    override nazov: string;

    constructor(modelAuta: string, evidencneCislo: number ){
        super();
        this.nazov = modelAuta;
        this.evidencneCislo = evidencneCislo;
    }

          override vypocetAmortizacie(){
       };

}