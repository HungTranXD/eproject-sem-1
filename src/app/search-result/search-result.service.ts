import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor( private http: HttpClient) { }

  searchBridgesByName(name: string): Observable<any> {
    const url = 'http://localhost:5000/search-bridge';
    let params = new HttpParams();
    params = params.append('q', name);
    return this.http.get(url, {params: params});
  }
}
