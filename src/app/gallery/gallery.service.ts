import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor( private http: HttpClient ) { }

  getAllImages(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-get-all-images';
    return this.http.get(url);
  }

}
