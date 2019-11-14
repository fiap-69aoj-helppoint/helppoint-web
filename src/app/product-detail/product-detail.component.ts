import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
@Injectable()
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product = new Product("", "", []);
  productList: Product[];
  sizeSelected: number;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];

          this.http.get("http://localhost:3000/api/products/" + this.id)
          .subscribe((data: Product) => {
            this.product = data;
            this.sizeSelected = 0;
          })
        }
      );



    this.http.get("http://localhost:3000/api/products")
    .subscribe((data: Product[]) => {
      this.productList = data;
      this.sizeSelected = 0;
      console.log(this.productList);
    })
  }

  getColors() {
    if(this.product && this.product.sizes && this.product.sizes.length > 0) {
      return this.product.sizes[this.sizeSelected].colors;
    }
  }

  onSelect(index) {
    this.sizeSelected = index;
  }

}
