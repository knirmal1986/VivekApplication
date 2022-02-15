import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from './http-get/http-get.component';
import { map, filter, tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[];
  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repos[]>{
    const params = new HttpParams()
      .set('sort', "Name")
      .set('page',"2");
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos', { 'params': params,'headers': headers  })
    .pipe(
      map((data)=>{
        console.log(data)
          return data
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      } )

    )
  }


}
