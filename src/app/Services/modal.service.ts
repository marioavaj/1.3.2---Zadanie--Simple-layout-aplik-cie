import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(
        public dialog: MatDialog,

    ) {}

    openDialog(component: any, config?: MatDialogConfig): MatDialogRef<any> {
        const modal = this.dialog.open(component, config);


        return modal;
    }



    }
