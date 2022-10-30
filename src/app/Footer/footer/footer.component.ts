import { Component, OnInit } from '@angular/core';
import { ModalWindowComponent } from 'src/app/modal-window/modal-window.component';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor(private modal: ModalService) {}

    ngOnInit(): void {}

    openModal(): void {
        this.modal.openDialog(ModalWindowComponent);
    }
}
