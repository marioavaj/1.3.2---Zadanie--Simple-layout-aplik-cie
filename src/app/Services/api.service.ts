import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private get jsonHttpOptions() {
        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('X-Requested-With', 'XMLHttpRequest');
        headers = headers.set('Content-Type', 'aplication/json');

        return {
            headers: headers,
        };
    }

    constructor(private http: HttpClient) {}

    get(): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/GetProducts';
        //"https://product-api.tomondre.com/api/v1/lessons/product/GetProducts"
        return this.http
            .get(endpoint, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    getById(id: number): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/GetProductById/';
        //"https://product-api.tomondre.com/api/v1/lessons/product/GetProducts"
        return this.http
            .get(endpoint + id, this.jsonHttpOptions)
            .pipe(catchError(this.handleError));
    }

    post(data: any): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/CreateProduct';

        return this.http
            .post(endpoint, data)
            .pipe(catchError(this.handleError));
    }

    put(id: number, data: any): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/UpdateProduct/';

        return this.http
            .put(endpoint + id, data)
            .pipe(catchError(this.handleError));
    }





    delete(id: number): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/RemoveProduct/';

        return this.http
            .delete(endpoint + id, this.jsonHttpOptions)
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
}
