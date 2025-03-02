
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [
    {name: 'Фотокамеры', products: []},
    {name: 'Смартфоны Samsung', products: []},
    {name: 'Смартфоны Apple', products: []},
    {name: 'Смарт-часы', products: []},
  ];

  @Output() categorySelected = new EventEmitter<Category>();

  selectCategory(category: Category) {
    this.categorySelected.emit(category);
  }

}
