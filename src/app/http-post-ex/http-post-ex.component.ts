import { PersonAPIService } from './../person-api.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-http-post-ex',
  templateUrl: './http-post-ex.component.html',
  styleUrls: ['./http-post-ex.component.css']
})
export class HttpPostExComponent implements OnInit {

  title = 'httpPost Example';
  people:Person[];
  person = new Person();
  constructor(private personAPIService:PersonAPIService) { }

  ngOnInit() {
this.getPersonDetails()
  }

  getPersonDetails(){
  this.personAPIService.getPeople().subscribe(
    data  =>{
      this.people = data
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
}
