import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AchivementService {

  constructor( private http: HttpClient ) { }

  //These API below get all post for pagination without limit and off set
  getAllPosts(): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-get-bridge/?_limit=10';
    return this.http.get(url);
  }
  getPostsPerPage(limit: number, offset: number): Observable<any> {
    const url = 'https://tranhungfptaptech.herokuapp.com/api-get-bridge-page';
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this.http.get(url, {params: params});
  }

}
