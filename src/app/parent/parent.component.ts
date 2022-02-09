import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title="parent to child communication"
  counter : number = 0;

  show = true;
  @ViewChild(ChildComponent,{static:true}) child: ChildComponent;
  constructor() {
    console.log("parent component works");
   }

  ngOnInit() {
    console.log("parent component ngOnit");
  }

  increment(){
    //this.child.increment()
    this.counter++
  }

  decrement(){
    //this.child.decrement()
    this.counter--
  }

  counterChanged(childcounter:number){
    this.counter = childcounter
  }

  ShowToggle(){
    console.log("ShowToggle")
    this.show = !this.show
  }
}
