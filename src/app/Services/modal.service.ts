import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

    modalRef: any;

  constructor(
    public dialog: MatDialog,

    ) { }



    openDialog() {
        this.dialog.open(ModalWindowComponent).addPanelClass("modalLayout");

      }
}
