import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-large',
      name: 'Смартфон Apple iPhone 14 Pro 128Gb фиолетовый',
      description: 'iPhone 14 Pro — новинка в мире смартфонов с инновационной системой камер, широким функционалом и большим экраном. Новейший чипсет обеспечивает невероятную производительность гаджета. ',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large',
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h98/65099848187934.jpg?format=gallery-large',
      name: 'Смарт-часы Apple Watch Series 8 41 мм Aluminum черный Midnight',
      description:'Смарт-часы Apple Watch Series 8 – стильное, многофункциональное и надежное устройство. ',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-chernyi-midnight-106362810/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. Дисплей Dinamyc AMOLED 2X с диагональю 6.8 дюймов воспроизводит четкое и красочное изображение при любом освещении.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      name: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      description: 'Встроенные аккумуляторы наушников теперь обеспечивают до 6 часов воспроизведения музыки и до 30 часов с подзарядкой в кейсе со включенным активным шумоподавлением. ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с мощной графикой',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h52/65069029949470.jpg?format=gallery-large',
      name: ' Монитор 27" LG 27UP850N-W серебристый',
      description: 'Дополнительно\n' +
        'Цветсеребристый\n' +
        'Регулировка по высотеДа\n' +
        'Габариты (ШxГxВ)613.5 x 239.3 x 569.3 мм\n' +
        'Вес5.9 кг',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/27-lg-27up850n-w-serebristyi-107342033/?c=750000000'
    },
    {
      image: 'Тhttps://resources.cdn-kaspi.kz/img/m/p/heb/h1d/64533976743966.jpg?format=gallery-large',
      name: 'Телевизор LG 55NANO806QA 140 см черный',
      description: 'Звук\n' +
        'Мощность звука20.0 Вт\n' +
        'Акустическая система2х10 Вт\n' +
        'Интерфейсы\n' +
        'Wi-FiДа\n' +
        'ВходыHDMI, Ethernet (RJ-45), USB, антенный, Bluetooth\n' +
        'Выходыаудио, оптический\n' +
        'Слот для CICI+',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/lg-55nano806qa-140-sm-chernyi-105572526/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h7c/63803223670814.jpg?format=gallery-large',
      name: 'Мясорубка Bosch MFW 68660 серебристый, черный',
      description: 'Особенности\n' +
        'Материал лоткаметалл\n' +
        'Материал корпусапластик/металл\n' +
        'Отсек для хранения насадокДа\n' +
        'Прорезиненные ножкиДа\n' +
        'Длина сетевого шнура1.2 м\n' +
        'Отсек для хранения шнураДа\n' +
        'Дополнительная информацияможно мыть в посудомоечной машине',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/bosch-mfw-68660-serebristyi-chernyi-3200533/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h4e/63767247257630.jpg?format=gallery-large',
      name: 'Микроволновая печь LG MS2535GIS черный',
      description: 'Микроволновая печь LG NeoChef c технологией Smart Inverter. Благодаря высокой мощности в 1000 Вт и точности управления продукты размораживаются, подогреваются и готовятся более эффективно, а блюда порадуют вас разнообразием. ',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lg-ms2535gis-chernyi-2900577/?c=750000000'
    }
  ];

  selectedLink: string | null = null;

  showShareOptions(link: string) {
    this.selectedLink = link;
  }

  shareViaWhatsApp() {
    if (this.selectedLink) {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(this.selectedLink)}`;
      window.location.href = whatsappUrl;
      this.selectedLink = null;
    }
  }

  shareViaTelegram() {
    if (this.selectedLink) {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.selectedLink)}`;
      window.location.href = telegramUrl;
      this.selectedLink = null;
    }
  }
}
