import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Category } from './category.model';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: Category | null = null;
  products: Product[] = [];

  selectCategory(category: Category) {
    const categoryProducts = this.products.filter(p => p.category === category.name);
    this.selectedCategory = { ...category, products: categoryProducts };
  }

}

