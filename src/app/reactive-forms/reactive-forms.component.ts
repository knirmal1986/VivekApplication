import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname: new FormControl('',[Validators.maxLength(15)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.contactForm)
  }

  get firstname() {
    return this.contactForm.get('firstname');
 }
}

export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
