import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-observable-ex',
  templateUrl: './observable-ex.component.html',
  styleUrls: ['./observable-ex.component.css']
})
export class ObservableExComponent implements OnInit {

 obs= new Observable((observer) => {

         console.log("Observable starts")
            setTimeout(() => { observer.next("1") }, 1000);
            setTimeout(() => { observer.next("2") }, 2000);
            setTimeout(() => { observer.next("3") }, 3000);
            //setTimeout(() => { observer.error("error emitted") }, 3500);
            setTimeout(() => { observer.next("4") }, 4000);
            setTimeout(() => { observer.next("5") }, 5000);
             setTimeout(() => { observer.complete() }, 6000);   //sen

    })

     ar=[1,2,3,4,5,6,7]
     obsof1=of(this.ar,'nirmal','vivek');

  constructor() { }

  ngOnInit() {
    this.obs.subscribe(
         (value) => { console.log(value) },
         (error) => { console.log(error)},
         () => {console.log("completed observable") }
    )

  this.obsof1.subscribe(val => console.log(val),
           error=> console.log("error"),
          () => console.log("complete"))

}



  }






