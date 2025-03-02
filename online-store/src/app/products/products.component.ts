import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent implements OnInit{
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hc5/86078683545630.jpg?format=gallery-medium',
      name: 'Смарт-часы Huawei Watch Fit 3 серебристый-белый-белый',
      description: 'С HUAWEI WATCH FIT 3 здоровый образ жизни доступен каждому. Раздвигая границы отображаемого контента. Поверните ваше запястье, чтобы увидеть всю необходимую информацию на большом квадратном экране. Ультратонкие рамки и полезная площадь экрана 77,4% обеспечивают визуальный опыт нового уровня: контент отображается чрезвычайно четко даже под прямыми солнечными лучами благодаря частоте обновления 60 Гц и авторегулировке яркости.',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/xiaomi-mdy-12-es-67w-usb-type-c-usb-belyi-106897965/?c=750000000 '
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-large ',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм черный-черный',
      description: 'Размер корпуса - 40 мм Время работы в активном режиме-До 18 часов Датчики-Gps С функцией автоматического определения падений, экстренного вызова и использованием картографических сервисов, Apple Watch SE придает вам дополнительную уверенность в безопасности как во время активного отдыха, так и в повседневной жизни ',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large ',
      name: 'Смартфон Apple iPhone 16 128Gb черный ',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании. ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium ',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый ',
      description: ' Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. ',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium ',
      name: 'Смартфон Apple iPhone 16 128Gb белый ',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании. ',
      rating: 5.0,
      link: ' https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'
    },


    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/pe2/2819666.jpg?format=gallery-medium',
      name: 'Фотокамера Sony ZVE10LB.CEC RU',
      description: 'Легко создавайте профессиональные видео для блогов благодаря преимуществам сменной оптики, большой APS-C матрицы, встроенного направленного трехкапсульного микрофона и других функций. Полностью на русском языке',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sony-zve10lb-cec-ru-128437333/?c=750000000'
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h91/63988341800990.jpg?format=gallery-medium',
      name: 'Фотокамера Canon EOS 2000D kit EF-s 18-55mm f/3.5-5.6 III черный',
      description: 'Легко создавайте высококлассные фотографии с высокой детализацией и видео Full HD кинематографического качества даже в условиях слабого освещения с помощью 24,1-мегапиксельной камеры EOS 2000D. Дистанционно управляйте камерой и моментально делитесь снимками с помощью Wi-Fi, NFC и приложения Canon Camera Connect.',
      rating:4.8 ,
      link: 'https://kaspi.kz/shop/p/canon-eos-2000d-kit-ef-s-18-55mm-f-3-5-5-6-iii-chernyi-100932167/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium ',
      name: 'Фотокамера Canon PowerShot G7X Mark II черный ',
      description: 'это компактная камера премиум-класса с 1-дюймовым CMOS BSI сенсором. Камера оснащена несъемным стабилизированным объективом с диапазоном фокусных расстояний 24-100 мм в 35 мм эквиваленте. G7 X Mark III имеет 3-дюймовый сенсорный дисплей, который может поворачиваться на 180° для селфи и видеоблогов.  ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-large ',
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый ',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.   ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000 '
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p54/20116700.png?format=gallery-large ',
      name: 'Смартфон Samsung Galaxy S25+ 5G 12 ГБ/256 ГБ розовый ',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.   ',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-rozovyi-133434365/?c=750000000 '
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-large ',
      name: ' Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      description: 'Новый Galaxy S25 – Искусственный интеллект Galaxy и технологии будущего · Официальная гарантия. Рассрочка до 24 месяцев. Ночная съемка. Легкий алюминиевый корпус.  ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000 '
    }




    // Add at least 8 more products
  ];

  shareProduct(product: any) {
    const whatsappUrl = `https://wa.me/?text=Check%20out%20this%20product:%20${product.link}`;
    window.open(whatsappUrl, '_blank');
  }

  shareProductTelegram(product: any) {
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=Check%20out%20this%20product`;
    window.open(telegramUrl, '_blank');
  }

  constructor() {}
  ngOnInit(): void {
    console.log('ProductsComponent uploaded');
  }
}
