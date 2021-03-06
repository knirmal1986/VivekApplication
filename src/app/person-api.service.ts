import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonAPIService {

  baseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    var headerParam = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.get<Person[]>(this.baseURL + 'people', {headers: headerParam}).pipe(
      filter( (data:any) => {
        console.log(data)
        return data.filter(val => {
          return val.name == 'Nirmal'
        } )
      })

    )
  }

  addPerson(person:Person){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(person);
    console.log(body)
   return  this.http.post<Person>(this.baseURL+ 'people',body,{'headers':headers}).pipe(
     filter( data => {
       console.log(data)
       return data.id > 2
     })
   )
  }
}
