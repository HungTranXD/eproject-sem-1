import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  getAllTopLists(): Observable<any> {
    const url = 'http://localhost:5000/api-all-top-lists';
    return this.http.get(url);
  }

  getPostsPerPage(continentId: string, countryCode: string, limit: number, offset: number): Observable<any> {
    const url = 'http://localhost:5000/api-get-bridge-page';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    params = params.append('countrycode', countryCode);
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this.http.get(url, {params: params});
  }
}
