import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[showNewHead]',
})
export class ShowNewHead {

@Input() set showNewHead(condition: boolean){

    if(condition){
this.viewContainer.createEmbeddedView(this.tempateRef)


    }else if(!condition){
        this.viewContainer.clear();
    }

}

    constructor(
        private tempateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }
}
