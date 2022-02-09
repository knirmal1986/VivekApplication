import { Injectable } from '@angular/core';

import { Product } from './product';

// @Injectable({
//   providedIn: 'root'
// })
export class ProductserviceService {


  constructor() { }

  getProducts() : Product[]{
    let products:Product[];

    return  products=[
      new Product(1,'Memory Card',500),
      new Product(2,'Pen Drive',750),
      new Product(3,'Power Bank',100),
      new Product(4,'Bluetooth',500),
      new Product(5,'SSD',750),
      new Product(6,'Charger/powerbank',100),
  ]
  }

  getProductDetailbyId(id:number){
    let products:Product[]=this.getProducts();
    return products.find(prod => prod.productID == id)
  }
}
