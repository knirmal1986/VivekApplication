import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductserviceService } from '../product/productservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product:Product;
  id :number;

  constructor(private productserviceService:ProductserviceService,
    private _Activatedroute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(
      params =>  {
        console.log(params);
        this.id = +params.get('id')
        this.product= this.productserviceService.getProductDetailbyId(this.id)
        console.log(this.product)
      }

    )
  }

  onBack(){
    this._router.navigate(['product']);
  }
}
