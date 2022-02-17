import { PersonAPIService } from './../person-api.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { filter, map } from 'rxjs/operators'
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-http-post-ex',
  templateUrl: './http-post-ex.component.html',
  styleUrls: ['./http-post-ex.component.css'],
  providers: [KeyValuePipe]
})
export class HttpPostExComponent implements OnInit {

  title = 'httpPost Example';
  people:Person[];
  person = new Person();
  constructor(private personAPIService:PersonAPIService,
    private http: HttpClient,
             private keyValue: KeyValuePipe) { }

  ngOnInit() {
 this.getPersonDetails()
 this.mapExample()
//this.getDogsBreed();
  }

  getPersonDetails(){
  this.personAPIService.getPeople().subscribe(
    data  =>{
      console.log(data)
      this.people = data.filter ( val => {
          return val.id >  2
      })
    }
  )
  }
  addPerson() {
    this.personAPIService.addPerson(this.person).subscribe(
      data=>{

        this.getPersonDetails();
      }
    )
  }
  mapExample(){
    var srcArray = from([1, 2, 3, 4]);
    srcArray.pipe(
      filter(val=> {
        return val > 2
      }),
      map(val => {
        console.log("inside map=="+val)
        return val*2
      })
    )
    .subscribe(
      val => {
        console.log("after subscribe=="+val)
      }
    )
  }

  $dogsBreed(): Observable<any> {
    return this.http.get<any>("https://dog.ceo/api/breeds/list/all")
  }

  getDogsBreed() {

    this.$dogsBreed()
      .pipe(
        map(data => {
        var dogs = this.keyValue.transform(data.message)
        console.log(dogs)
      }))
      .subscribe();

  }
}
