import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ModalLogInComponent } from '../modal-window/ModalLogiIn/modal-log-in/modal-log-in.component';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private user: User;
    loginData;
    token: any;
    isLogIn: boolean;
    stayByClicked: any;

    constructor(
        private http: HttpClient,
        private login: AuthenticationService,
        private authenticationService: AuthenticationService
    ) {}

    loginDatafromComponent(loginData, stayByClicked: boolean) {
        this.loginData = loginData;
        this.stayByClicked = stayByClicked;
        console.log(this.loginData, this.stayByClicked);
        this.toApiLogin();
    }

    toApiLogin() {
        this.login
            .authentication(this.loginData)
            .pipe(take(1))
            .subscribe((loginResponse) => {
                console.log(loginResponse);
                this.token = loginResponse.token;
                this.isLogIn = true;
                this.authenticationService.isLogged(this.isLogIn);
                console.log('po kliku log ' + this.isLogIn);
                this.user = loginResponse;
                if (this.stayByClicked) {
                    localStorage.setItem('Dk4kdoSkf5*gjd', this.token);

                    console.log(
                        'po kliku log + chcem zostat prihlaseny ' + this.isLogIn
                    );
                }
                if (!this.stayByClicked) {
                    localStorage.removeItem('Dk4kdoSkf5*gjd');
                }
            });
    }
}
