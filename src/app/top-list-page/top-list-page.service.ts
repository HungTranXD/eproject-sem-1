import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopListPageService {

  constructor( private http: HttpClient) { }

  //Call API get top list info (name, description of the top list)
  getTopListInfo(topListId: number): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-top-list-info';
    let params = new HttpParams();
    params = params.append('toplistid', topListId);
    return this.http.get(url, {params: params});
  }

  //Call API get top 10 bridges in the top list
  get10Bridges(sortOrder: string): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-top-10-bridges';
    let params = new HttpParams();
    params = params.append('sortorder', sortOrder);
    return this.http.get(url, {params: params});
  }

}
