export enum AppRoute {
    Main = '/',
    Catalog = '/catalog',
    Product = '/product/:id'
}

export enum APIRoute {
Offers = '/cameras',
Promo = '/promo',
Reviews = '/reviews',
}

export enum TAB {
    Overview = '#overview',
    Details = '#details',
}

export const sortTypes = [
  {
    type: 'text',
    name: 'price',
    label: 'по цене'
  },
  {
    type: 'text',
    name: 'rating',
    label: 'по популярности'
  },
];

export const orderTypes = [
  {
    type: 'up',
    name: 'asc',
    label: 'по возрастанию'
  },
  {
    type: 'down',
    name: 'desc',
    label: 'по убыванию'
  }
];

export const STARS = 5;

export const PRODUCTS_CARD_QUANTITY = 3;

export const REVIEWS_QUANTITY = 3;

export enum NameSpace {
    Data = 'DATA',
    Offers = 'OFFERS',
    Reviews = 'REVIEWS'
}

export const categoryFilter = [
  {
    name: 'photocamera',
    checked: false,
    title: 'Фотокамера',
  },
  {
    name: 'videocamera',
    checked: false,
    title: 'Видеокамера',
  }
];

export const typeFilter = [
  {
    name: 'digital',
    checked: false,
    title: 'Цифровая',
  },
  {
    name: 'film',
    checked: false,
    title: 'Плёночная',
  },
  {
    name: 'snapshot',
    checked: false,
    title: 'Моментальная',
  },
  {
    name: 'collection',
    checked: false,
    title: 'Коллекционная',
  }
];

export const levelFilter = [
  {
    name: 'zero',
    checked: false,
    title: 'Нулевой',
  },
  {
    name: 'non-professional',
    checked: false,
    title: 'Любительский',
  },
  {
    name: 'professional',
    checked: false,
    title: 'Профессиональный',
  }
];
