import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    tokenFromLS: string | null;
    router: any;

    private get jsonHttpOptions() {
        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('X-Requested-With', 'XMLHttpRequest');
        headers = headers.set('Content-Type', 'application/json');

        if (this.authentication.token) {
            headers = headers.set(
                'Authorization',
                'Basic ' + this.authentication.token
            );
        } else if (this.tokenFromLS) {
            headers = headers.set('Authorization', 'Basic ' + this.tokenFromLS);
        }

        return {
            headers: headers,
        };
    }

    constructor(
        private http: HttpClient,
        private authentication: AuthenticationService
    ) {
        this.tokenFromLS = localStorage.getItem('Dk4kdoSkf5*gjd'); //nacita token z LS
    }

    get(): Observable<any> {
        if (
            // this.authentication.token == undefined;
            this.authentication.token == undefined &&
            this.tokenFromLS == null
        ) {
            const endpoint =
                'https://angularkurz.itcooking.eu/api/v1/lessons/product/GetProducts';
            return this.http
                .get(endpoint, this.jsonHttpOptions)
                .pipe(catchError(this.handleError));
        } else {
            const endpoint =
                'https://angularkurz.itcooking.eu/api/v1/auth/lessons/product/GetProducts';
            return this.http
                .get(endpoint, this.jsonHttpOptions)
                .pipe(catchError(this.handleError));
        }
    }

    getById(id: number): Observable<any> {
        if (
            this.authentication.token == undefined ||
            this.tokenFromLS == null
        ) {
            const endpoint =
                'https://angularkurz.itcooking.eu/api/v1/lessons/product/GetProductById/';
            return this.http
                .get(endpoint + id, this.jsonHttpOptions)
                .pipe(catchError(this.handleError));
        } else {
            const endpoint =
                'https://angularkurz.itcooking.eu/api/v1/auth/lessons/product/GetProductById/';

            return this.http
                .get(endpoint + id, this.jsonHttpOptions)
                .pipe(catchError(this.handleError));
        }
    }

    post(data: any): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/auth/lessons/product/CreateProduct/';

        return this.http
            .post(endpoint, data, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    put(id: number, data: any): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/auth/lessons/product/UpdateProduct/';

        return this.http
            .put(endpoint + id, data, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    putReview(data: any): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/CreateReview/';
        return this.http
            .post(endpoint, data)
            .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/auth/lessons/product/RemoveProduct/';

        return this.http
            .delete(endpoint + id, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occured: ', error.error.message);
        } else {
            alert(`Error  code ${error.status}`);
        }
        return throwError(() => error);
    }
}
