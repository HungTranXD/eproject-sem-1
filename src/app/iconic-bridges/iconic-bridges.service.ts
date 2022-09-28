import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IconicBridgesService {

  constructor( private http: HttpClient ) { }

  getIconicBridges(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/iconic-bridges';
    return this.http.get(url);
  }
}
