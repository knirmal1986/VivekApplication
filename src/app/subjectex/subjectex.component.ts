import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectex',
  templateUrl: './subjectex.component.html',
  styleUrls: ['./subjectex.component.css']
})
export class SubjectexComponent implements OnInit {

  observable$ = new Observable<number>(subscriber => {   //new instance
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });

 subject$  = new Subject();

  constructor() { }

  ngOnInit() {

    this.observable$.subscribe(val => {   //new instance
      console.log("Obs1 :" + val);
    });

    this.observable$.subscribe(val => {   //new instance
      console.log("Obs2 :" + val);
    });


    this.subject$.subscribe(val => {   // same instance of observable
      console.log("Sub1 " + val);
    });
    this.subject$.subscribe(val => {   //same instance of observable
      console.log("Sub2 " + val);
    });
    this.subject$.subscribe(val => {   //same instance of observable
      console.log("Sub3 " + val);
    });

    //hot observable
     this.subject$.next(Math.floor(Math.random() * 200) + 1);   //shared



  }

}
