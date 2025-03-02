
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  currentImageIndex = 0;

  likeProduct() {
    this.product.likes++;
  }

  shareProduct(product: any) {
    const whatsappUrl = `https://wa.me/?text=Check%20out%20this%20product:%20${product.link}`;
    window.open(whatsappUrl, '_blank');
  }

  shareProductTelegram(product: any) {
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=Check%20out%20this%20product`;
    window.open(telegramUrl, '_blank');
  }


}
