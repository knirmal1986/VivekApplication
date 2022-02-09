import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  title = 'Template driven forms';
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm){
    console.log(contactForm.value);
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
