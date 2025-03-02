import { CommonModule} from '@angular/common';
import { Component, Input} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Category } from '../category.model';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category!: Category;
  products: Product[] = [
    {

      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hc5/86078683545630.jpg?format=gallery-medium',
      name: 'Смарт-часы Huawei Watch Fit 3 серебристый-белый-белый',
      description: 'С HUAWEI WATCH FIT 3 здоровый образ жизни доступен каждому. Раздвигая границы отображаемого контента. Поверните ваше запястье, чтобы увидеть всю необходимую информацию на большом квадратном экране. ',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/xiaomi-mdy-12-es-67w-usb-type-c-usb-belyi-106897965/?c=750000000 ',
      category: 'Смарт-часы',
      likes: 2

    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      category: 'Смарт-часы',
      likes: 2

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-large ',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм черный-черный',
      description: 'Размер корпуса - 40 мм Время работы в активном режиме-До 18 часов Датчики-Gps С функцией автоматического определения падений, экстренного вызова и использованием картографических сервисов. ',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000 ',
      category: 'Смарт-часы',
      likes: 10

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large ',
      name: 'Смартфон Apple iPhone 16 128Gb черный ',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.  ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000 ',
      category: 'Смартфоны Apple',
      likes: 42

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium ',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый ',
      description: ' Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000 ',
      category:'Смартфоны Apple' ,
      likes: 50

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium ',
      name: 'Смартфон Apple iPhone 16 128Gb белый ',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.  ',
      rating: 5.0,
      link: ' https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
      category: 'Смартфоны Apple',
      likes: 33
    },


    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/pe2/2819666.jpg?format=gallery-medium',
      name: 'Фотокамера Sony ZVE10LB.CEC RU',
      description: 'Легко создавайте профессиональные видео для блогов благодаря преимуществам сменной оптики, большой APS-C матрицы, встроенного направленного трехкапсульного микрофона и других функций.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sony-zve10lb-cec-ru-128437333/?c=750000000',
      category: 'Фотокамеры',
      likes: 155

    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h91/63988341800990.jpg?format=gallery-medium',
      name: 'Фотокамера Canon EOS 2000D kit EF-s 18-55mm f/3.5-5.6 III черный',
      description: 'Легко создавайте высококлассные фотографии с высокой детализацией и видео Full HD кинематографического качества даже в условиях слабого освещения с помощью 24,1-мегапиксельной камеры EOS 2000D. ',
      rating:4.8 ,
      link: 'https://kaspi.kz/shop/p/canon-eos-2000d-kit-ef-s-18-55mm-f-3-5-5-6-iii-chernyi-100932167/?c=750000000 ',
      category: 'Фотокамеры',
      likes: 12

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium ',
      name: 'Фотокамера Canon PowerShot G7X Mark II черный ',
      description: 'это компактная камера премиум-класса с 1-дюймовым CMOS BSI сенсором. Камера оснащена несъемным стабилизированным объективом с диапазоном фокусных расстояний 24-100 мм в 35 мм эквиваленте.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000 ',
      category: 'Фотокамеры',
      likes: 75

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-large ',
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый ',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.   ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000 ',
      category: 'Смартфоны Samsung',
      likes: 36

    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p54/20116700.png?format=gallery-large ',
      name: 'Смартфон Samsung Galaxy S25+ 5G 12 ГБ/256 ГБ розовый ',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.   ',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-rozovyi-133434365/?c=750000000 ',
      category:'Смартфоны Samsung',
      likes: 45

    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-large ',
      name: ' Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.  ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000 ',
      category:'Смартфоны Samsung' ,
      likes: 44

    }

  ];
  get filteredProducts() {
    return this.category ? this.products.filter(p => p.category === this.category.name) : [];
  }



}
