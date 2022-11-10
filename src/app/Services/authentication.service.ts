import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    catchError,
    Observable,
    take,
    throwError,
} from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    authenticationStream = new BehaviorSubject<any>('');
    userLoginData: User;
    user: User;
    loginData;
    public static token: any;
    isLogIn: boolean;
    stayByClicked: any;
    static user: any;

    private get jsonHttpOptions() {
        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('X-Requested-With', 'XMLHttpRequest');
        headers = headers.set('Content-Type', 'application/json');

        return {
            headers: headers,
        };
    }

    constructor(private http: HttpClient) {}

    authentication(loginData): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/user/authenticate';

        return this.http
            .post(endpoint, loginData, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occured: ', error.error.message);
        } else {
            alert(
                `Backeend returned code ${error.status},  ` +
                    `body was:  ${error.error.title}`
            );
        }
        return throwError(error);
    }

    isLogged(isLogged: boolean) {
        this.authenticationStream.next(isLogged);
    }

    connectToApi(loginData, stayByClicked: boolean) {
        this.authentication(loginData)
            .pipe(take(1))
            .subscribe((loginResponse) => {
                console.log(loginResponse);
                AuthenticationService.token = loginResponse.token;
                this.isLogIn = true; // v headu sluzi na zmenu ikony prihlasit/odhlasit
                this.isLogged(this.isLogIn);

                this.user = loginResponse; //ziska resposeData prav uzivatela

                // ulozi token do LocalStorage po zakliknuti checkboxu pre trvale prihlasenie alebo odhlasenie
                if (stayByClicked) {
                    localStorage.setItem(
                        'Dk4kdoSkf5*gjd',
                        AuthenticationService.token
                    );
                } else {
                    localStorage.removeItem('Dk4kdoSkf5*gjd');
                }
            });
    }

    public static getUserToken(): string {
        return this.user.token;
    }
}
