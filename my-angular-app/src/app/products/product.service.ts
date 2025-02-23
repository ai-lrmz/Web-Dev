import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories = ['Смартфоны', 'Ноутбуки', 'Телевизоры', 'Аксессуары'];

  products: Product[] = [
    { id: 1, category: 'Смартфоны', name: 'iPhone 14', description: '128GB, Black', price: 450000, image: 'iphone.jpg', likes: 0 },
    { id: 2, category: 'Смартфоны', name: 'Samsung Galaxy S23', description: '256GB, White', price: 400000, image: 'samsung.jpg', likes: 0 },
    { id: 3, category: 'Смартфоны', name: 'Xiaomi 13 Pro', description: '512GB, Blue', price: 350000, image: 'xiaomi.jpg', likes: 0 },
    { id: 4, category: 'Смартфоны', name: 'Google Pixel 7', description: '128GB, Green', price: 380000, image: 'pixel.jpg', likes: 0 },
    { id: 5, category: 'Смартфоны', name: 'Huawei P60', description: '256GB, Gold', price: 420000, image: 'huawei.jpg', likes: 0 },

    { id: 6, category: 'Ноутбуки', name: 'MacBook Pro 16', description: 'M2, 16GB RAM', price: 1200000, image: 'macbook.jpg', likes: 0 },
    { id: 7, category: 'Ноутбуки', name: 'ASUS ROG', description: 'i9, 32GB RAM', price: 950000, image: 'asus.jpg', likes: 0 },
    { id: 8, category: 'Ноутбуки', name: 'Lenovo ThinkPad', description: 'Ryzen 7, 16GB RAM', price: 700000, image: 'lenovo.jpg', likes: 0 },
    { id: 9, category: 'Ноутбуки', name: 'HP Spectre', description: 'i7, 16GB RAM', price: 850000, image: 'hp.jpg', likes: 0 },
    { id: 10, category: 'Ноутбуки', name: 'Dell XPS', description: 'i5, 8GB RAM', price: 600000, image: 'dell.jpg', likes: 0 },

    { id: 11, category: 'Телевизоры', name: 'Samsung OLED 55"', description: 'Smart TV 4K', price: 750000, image: 'samsung_tv.jpg', likes: 0 },
    { id: 12, category: 'Телевизоры', name: 'LG NanoCell 50"', description: 'HDR 10+', price: 650000, image: 'lg_tv.jpg', likes: 0 },
    { id: 13, category: 'Телевизоры', name: 'Sony Bravia 65"', description: 'Google TV', price: 900000, image: 'sony_tv.jpg', likes: 0 },
    { id: 14, category: 'Телевизоры', name: 'TCL 43"', description: 'Android TV', price: 500000, image: 'tcl_tv.jpg', likes: 0 },
    { id: 15, category: 'Телевизоры', name: 'Philips 55"', description: 'Ambilight', price: 780000, image: 'philips_tv.jpg', likes: 0 }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(category: string) {
    return this.products.filter(product => product.category === category);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  likeProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.likes++;
    }
  }
}
