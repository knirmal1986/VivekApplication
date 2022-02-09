import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  constructor(private productserviceService:ProductserviceService) { }

  ngOnInit() {
    this.products = this.productserviceService.getProducts();
  }

  getProducts(){
    console.log("get products")
    this.products = this.productserviceService.getProducts();
  }
}
