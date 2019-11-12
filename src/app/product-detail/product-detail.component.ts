import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
@Injectable()
export class ProductDetailComponent implements OnInit {

  product: Product = new Product("", "", []);
  sizeSelected: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/api/products/1")
    .subscribe((data: Product) => {
      this.product = data;
      this.sizeSelected = 0;
      console.log(this.product)
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
