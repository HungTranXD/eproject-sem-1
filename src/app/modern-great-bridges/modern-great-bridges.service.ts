import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModernGreatBridgesService {

  constructor( private http: HttpClient ) { }

  getModernGreatBridges(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/modern-great-bridges';
    return this.http.get(url);
  }
}
