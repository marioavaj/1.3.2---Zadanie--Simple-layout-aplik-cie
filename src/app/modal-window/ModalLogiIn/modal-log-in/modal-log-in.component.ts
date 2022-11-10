import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
    selector: 'app-modal-log-in',
    templateUrl: './modal-log-in.component.html',
    styleUrls: ['./modal-log-in.component.scss'],
})
export class ModalLogInComponent implements OnInit {
    logginGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    token: string;
    stayByClicked = false;
    isLogIn = false;
    userData: {};

    constructor(
        private dialogRef: MatDialogRef<ModalLogInComponent>,
        private authentication: AuthenticationService
    ) {}

    ngOnInit(): void {}

    stayLoggedIn() {
        this.stayByClicked = !this.stayByClicked;
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    LogIn(): void {
        this.logginGroup.markAllAsTouched();
        this.logginGroup.updateValueAndValidity();

        let userName = this.logginGroup.get('name')?.getRawValue();
        let password = this.logginGroup.get('password')?.getRawValue();

        this.userData = {
            username: userName,
            password: password,
        };
        this.authentication.connectToApi(this.userData, this.stayByClicked);

        this.closeModal();
    }
}
