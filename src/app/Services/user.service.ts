import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
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
        private authenticationService: AuthenticationService
    ) {}


}
