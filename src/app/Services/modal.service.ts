import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { ModalAddEditProductComponent } from '../modal-window/ModalAddEditProduct/modal-add-edit-product/modal-add-edit-product.component';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(
        public dialog: MatDialog,

    ) {}

    openDialog() {
        const modal = this.dialog.open(ModalWindowComponent);
        modal.disableClose = true;
    }

    openNewProduct() {
        const modal = this.dialog.open(ModalAddEditProductComponent);
        modal.disableClose = true;
    }

    closeModal() {
        this.dialog.closeAll();
    }
}
