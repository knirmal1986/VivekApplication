import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void  {
    let error = false;
    var promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("Async Work Complete using promise");
        if (error) {
          reject('error'); // pass values
        } else {
          resolve('done'); // pass values
        }
      },1000)
    } )

    promise.then(
      (val) =>  {
        console.log(val);
        throw new Error("fail")
      },
      (error) => console.log(error),
    ).then(
      (val) =>  {
        console.log(val);
      },
      (error) => console.log(error),
    ).catch((err) => console.error(err))
  }

  showMe = false;


  toDate: Date = new Date();

  title: string = 'Angular Routing Example' ;
  msg: string= 'Welcome to Angular ';

  num: number= 9542.14554;

  per: number= .7414;
  cur: number= 175;
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2},
  {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
    selectedValue1: string= 'One';
    selectedValue2: string= 'One';
    selectedValue3: string= 'One';
    selectedValue4: string= 'One';



}

class item {
  name: string;
  val: number;
}

