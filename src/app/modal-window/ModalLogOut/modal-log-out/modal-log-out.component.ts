import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
    selector: 'app-modal-log-out',
    templateUrl: './modal-log-out.component.html',
    styleUrls: ['./modal-log-out.component.scss'],
})
export class ModalLogOutComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<ModalLogOutComponent>,
        private authenticationService: AuthenticationService) {}

    ngOnInit(): void {}

    logOut() {
        localStorage.removeItem('Dk4kdoSkf5*gjd');//vymaze kluc s tokenom
        this.authenticationService.isLogged(false);//ymeni ikonku v header na prihlasit
        this.dialogRef.close();//zavrie okno

    }
}
