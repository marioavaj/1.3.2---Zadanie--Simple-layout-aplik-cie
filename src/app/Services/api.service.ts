import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private get jsonHttpOptions() {
        let headers = new HttpHeaders();
        headers = headers.set("Access-Control-Allow-Origin", "*");
        headers = headers.set("X-Requested-With", "XMLHttpRequest");
        headers = headers.set("Content-Type", "aplication/json")

        return {
            headers: headers,
        };
    }

    constructor(private http: HttpClient) {}

    get(): Observable<any> {
        const endpoint =
            'https://angularkurz.itcooking.eu/api/v1/lessons/product/GetProducts';
        return this.http.get(endpoint, this.jsonHttpOptions);
    }
}
