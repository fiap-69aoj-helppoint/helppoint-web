import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

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

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.search(this.id);
        }
      );
  }

  search(id: number) {
    this.http.get(environment.apiUrl + "/products/" + id)
    .subscribe((data: Product) => {
      this.product = data;
      this.sizeSelected = 0;
    })

    this.http.get(environment.apiUrl + "/products/" + id  + "/related")
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
