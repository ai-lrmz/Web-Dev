import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-item">
      <img [src]="product.imageUrl" alt="{{ product.name }}">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Likes: {{ product.likes }}</p>
      <button (click)="like()">Like</button>
      <button (click)="remove()">Remove</button>
    </div>
  `,
  styles: [`
    .product-item {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      display: inline-block; /* Makes items arrange horizontally */
      width: 200px; /* Adjust as needed */
      vertical-align: top; /* Align items to the top */
    }
    .product-item img {
      max-width: 100%;
      height: auto;
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: ProductItem;
  @Output() removeEvent = new EventEmitter<ProductItem>();
  @Output() likeEvent = new EventEmitter<ProductItem>();


  remove() {
    this.removeEvent.emit(this.product);
  }

  like() {
    this.likeEvent.emit(this.product);
  }
}

