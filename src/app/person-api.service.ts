import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonAPIService {

  baseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL + 'people')
  }

  addPerson(person:Person){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(person);
    console.log(body)
   return  this.http.post(this.baseURL+ 'people',body,{'headers':headers})
  }
}
