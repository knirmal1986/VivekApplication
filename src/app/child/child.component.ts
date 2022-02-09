import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve } from 'url';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
//alias to input variable
   @Input("myCount") count :number

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
  // @Output() countChanged : EventEmitter<number> = new EventEmitter();

  //count = 0;
  constructor() { console.log("constructor called") }
  ngOnDestroy(): void {
    console.log("removed ChildComponent ");
    console.log("unsubscribed observable ");


    console.log("unsubscribed observable ");

    console.log("unsubscribed observable ");

  }


  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges called=="+this.count );
      for (let property in changes) {
        if (property === 'count') {
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        }
    }
  }

  ngOnInit() {

    this.obs.subscribe(
         (value) => { console.log(value) },
         (error) => { console.log(error)},
         () => {console.log("completed observable") }
    )
    console.log(this.count)

    var promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("Async Work Complete using promise");
        resolve("promise Task Complete!");
      },1000)
    } )

    promise.then(
      () => console.log(" promise Task Complete!"),
      () => console.log(" promise Task Errored!"),
    )
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  increment(){
    this.count++;
    //this.countChanged.emit(this.count);
  }
  decrement(){
    this.count--;
    //this.countChanged.emit(this.count);
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
  }
}
