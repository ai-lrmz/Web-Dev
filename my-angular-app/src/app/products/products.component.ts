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
      id: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h13/64434418745374.jpg?format=gallery-medium',
      name: 'Apple iPhone 14 Pro 128GB',
      description: 'Флагманский смартфон с процессором A16 Bionic и камерой 48 МП',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000'
    },
    {
      id:2,

      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Apple MacBook Air 13',
      description: 'Ноутбук с чипом M1 и батареей на 18 часов работы',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      id:3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h98/65099848187934.jpg?format=gallery-large',
      name: 'Apple Watch Series 8',
      description: 'Умные часы с датчиком температуры и функцией ЭКГ',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-chernyi-midnight-106362810/?c=750000000'
    },
    {
      id:4,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h39/62861973442526/smartfon-samsung-galaxy-s23-ultra-5g-12-gb-256-gb-cernyj-108756884-1.jpg',
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Флагманский смартфон с камерой 200 МП и стилусом S-Pen',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-108756884/'
    },
    {
      id:5,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h3c/51914364674014/naushniki-apple-airpods-pro-belyj-4802133-1.jpg',
      name: 'Apple AirPods Pro',
      description: 'Беспроводные наушники с активным шумоподавлением',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4802133/'
    },
    {
      id:6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h78/h8b/50128287567902/igrovaya-pristavka-sony-playstation-5-100746552-1.jpg',
      name: 'Sony PlayStation 5',
      description: 'Игровая консоль нового поколения с мощной графикой',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-100746552/'
    },
    {
      id:7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h1d/61917753860190/monitor-lg-27up850n-w-27-uhd-belyi-107108349-1.jpg',
      name: 'LG 27UP850N-W 27"',
      description: 'Монитор 4K UHD с HDR10 и IPS-матрицей',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lg-27up850n-w-27-107108349/'
    },
    {
      id:8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/hf1/48379541573662/tv-lg-55nano866pa-55-139-sm-cernyj-101658267-1.jpg',
      name: 'LG 55NANO866PA 55"',
      description: 'Телевизор 4K UHD с технологией NanoCell',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/lg-55nano866pa-55-101658267/'
    },
    {
      id:9,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc5/49937770504222/bosch-mfw-45020-6000063-1.jpg',
      name: 'Bosch MFW 45020',
      description: 'Мясорубка мощностью 1600 Вт с насадками',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/bosch-mfw-45020-6000063/'
    },
    {
      id:10,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h77/51670718050398/mikrovolnovaya-pech-lg-ms2595gis-100022280-1.jpg',
      name: 'LG MS2595GIS',
      description: 'Микроволновая печь с грилем и интеллектуальным управлением',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lg-ms2595gis-100022280/'
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
