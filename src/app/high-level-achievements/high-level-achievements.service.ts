import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HighLevelAchievementsService {

  constructor( private http: HttpClient ) { }

  getHighLevelAchievements(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/high-level-achievements';
    return this.http.get(url);
  }
}
