export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  kaspiUrl: string;
  likes: number;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Смартфоны",
    products: [
      {
        id: 1,
        name: "iPhone 15 Pro",
        description: "Флагманский смартфон от Apple.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h60/h80/83584801726494.jpg",
        kaspiUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-112508506/",
        likes: 0
      },
      {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        description: "Флагман от Samsung с мощной камерой.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h90/hba/84484801726494.jpg",
        kaspiUrl: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-chernyi-112508512/",
        likes: 0
      },
      // Добавь еще 3 товара
    ]
  },
  {
    id: 2,
    name: "Ноутбуки",
    products: [
      {
        id: 6,
        name: "MacBook Air M2",
        description: "Легкий и мощный ноутбук Apple.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hd0/hdb/82584801726494.jpg",
        kaspiUrl: "https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-seryi-112508513/",
        likes: 0
      },
      // Добавь еще 4 товара
    ]
  },
  {
    id: 3,
    name: "Телевизоры",
    products: [
      {
        id: 11,
        name: "Samsung QLED 55",
        description: "Крутой телевизор с QLED экраном.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hf0/hfb/80584801726494.jpg",
        kaspiUrl: "https://kaspi.kz/shop/p/samsung-qled-55-112508520/",
        likes: 0
      },
      // Добавь еще 4 товара
    ]
  },
  {
    id: 4,
    name: "Игровые консоли",
    products: [
      {
        id: 16,
        name: "Sony PlayStation 5",
        description: "Лучшая консоль для гейминга.",
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h70/h80/81584801726494.jpg",
        kaspiUrl: "https://kaspi.kz/shop/p/sony-playstation-5-112508525/",
        likes: 0
      },
      // Добавь еще 4 товара
    ]
  }
];
