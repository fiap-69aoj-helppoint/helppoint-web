import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchProductComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
