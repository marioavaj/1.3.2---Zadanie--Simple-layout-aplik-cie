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
    whoIs = new BehaviorSubject<any>('');

    userLoginData: User;

    loginData: User;
    public static token: any;
    isLogIn: boolean;
    stayByClicked: any;
    user = new User();
    userName: string | null;

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

    authentication(loginData: User): Observable<any> {
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

    userNamefromLS(userName:string | null){
        this.authenticationStream.next(userName);
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
                this.userName = this.user.firstName + ' ' + this.user.lastName;
                this.userNamefromLS(this.userName);

                this.whoIs.next(this.user);

                // ulozi token do LocalStorage po zakliknuti checkboxu pre trvale prihlasenie alebo odhlasenie
                if (stayByClicked) {
                    localStorage.setItem(
                        'Dk4kdoSkf5*gjd',
                        AuthenticationService.token
                    );
                    localStorage.setItem('Dk4kdoSkf5*g5464jd', this.userName);
                } else {
                    localStorage.removeItem('Dk4kdoSkf5*gjd');
                    localStorage.removeItem('Dk4kdoSkf5*g5464jd');
                }
            });
    }

    getUserToken(): string {
        return this.user.token;
    }
}
