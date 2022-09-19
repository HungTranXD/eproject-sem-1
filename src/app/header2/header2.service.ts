import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Header2Service {

  constructor( private http: HttpClient) { }

  getAllContinents(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-get-continent';
    return this.http.get(url);
  }
}
