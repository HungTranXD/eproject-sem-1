import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BridgesByContinentService {

  constructor( private http: HttpClient) { }

  //Call API to get info of continent (name, intro, thumbnail)
  getContinentInfo(continentId: number): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-single-continent-info';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    return this.http.get(url, {params: params});
  }

  //Call API to get all bridges of this continent
  getPostsByContinent(continentId: number): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-bridge-by-continent';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    return this.http.get(url, {params: params});
  }

  //Call API to get all images of bridges in this continent
  getImagesByContinent(continentId: number): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-get-continent-images';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    return this.http.get(url, {params: params});
  }

  //Call API to get top (the longest/highest/tallest) bridge in the continent
  getTopBridgeByContinent(continentId: number, sortOrder: string): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-top-bridge-of-continent';
    let params = new HttpParams();
    params = params.append('continentid', continentId);
    params = params.append('sortorder', sortOrder);
    return this.http.get(url, {params: params});
  }
}
