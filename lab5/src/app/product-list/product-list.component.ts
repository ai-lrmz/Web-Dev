import { Component, Input } from '@angular/core';
import { Product } from '../app.component';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
