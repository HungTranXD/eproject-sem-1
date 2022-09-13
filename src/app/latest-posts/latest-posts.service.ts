import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LatestPostsService {

  constructor( private http: HttpClient) { }

  getAllContinents(): Observable<any> {
    const url = 'http://localhost:5000/api-get-continent';
    return this.http.get(url);
  }

  getAllCountries(): Observable<any> {
    const url = 'http://localhost:5000/api-get-countries';
    return this.http.get(url);
  }

  getCountries(continentId: number): Observable<any> {
    const url = 'http://localhost:5000/api-country-by-continent';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    return this.http.get(url, {params: params});
  }

  //These API below get all post for pagination without limit and off set
  getAllPosts(): Observable<any> {
    const url = 'http://localhost:5000/api-get-bridge';
    return this.http.get(url);
  }

  getPostsByContinent(continentId: number): Observable<any> {
    const url = 'http://localhost:5000/api-bridge-by-continent';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    return this.http.get(url, {params: params});
  }

  getPostsByCountry(countryCode: string): Observable<any> {
    const url = 'http://localhost:5000/api-bridge-by-country';
    let params = new HttpParams();
    params = params.append('countrycode', countryCode);
    return this.http.get(url, {params: params});
  }

  //These API below get posts in a single page at a time (with limit and offset)
  getTotalPostNumber(continentId: string, countryCode: string): Observable<any> {
    const url = 'http://localhost:5000/api-get-total-number';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    params = params.append('countrycode', countryCode);
    return this.http.get(url, {params: params});
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
