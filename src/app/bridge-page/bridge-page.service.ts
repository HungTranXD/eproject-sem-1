import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BridgePageService {

  constructor( private http: HttpClient) { }

  //Call API to get all detail information of a specific bridge
  getBridgeDetail( bridgeId: number ): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-bridge-detail';
    let params = new HttpParams();
    params = params.append('bridgeid', bridgeId);
    return this.http.get(url, {params: params});
  }
  //Call API to all images of a specific bridge
  getBridgeImages( bridgeId: number ): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-bridge-images';
    let params = new HttpParams();
    params = params.append('bridgeid', bridgeId);
    return this.http.get(url, {params: params});
  }
}
