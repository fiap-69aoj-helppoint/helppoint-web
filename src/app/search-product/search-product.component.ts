import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  idPesquisa: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/product/' + this.idPesquisa]);
  }

}
