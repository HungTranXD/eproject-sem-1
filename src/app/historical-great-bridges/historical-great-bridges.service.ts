import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoricalGreatBridgesService {

  constructor( private http: HttpClient ) { }

  getHistoricalGreatBridges(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/historical-great-bridges';
    return this.http.get(url);
  }

}
