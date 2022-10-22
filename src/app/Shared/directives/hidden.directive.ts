import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[hidden]',
})
export class Hidden {

@Input() set hidden(condition: boolean){

    if(!condition){
this.viewContainer.clear();


    }else if(condition){
        this.viewContainer.createEmbeddedView(this.tempateRef)
    }

}

    constructor(
        private tempateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }
}
