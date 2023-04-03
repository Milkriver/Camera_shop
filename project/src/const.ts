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
    Reviews = 'REVIEWS',
    Filters = 'FILTERS',
}

export enum FilterType {
  Category = 'category',
  Type = 'type',
  Level = 'level'
}

export const filterItem = [
  {
    type: 'category',
    name: 'photocamera',
    checked: false,
    title: 'Фотокамера',
  },
  {
    type: 'category',
    name: 'videocamera',
    checked: false,
    title: 'Видеокамера',
  },
  {
    type: 'type',
    name: 'digital',
    checked: false,
    title: 'Цифровая',
  },
  {
    type: 'type',
    name: 'film',
    checked: false,
    title: 'Плёночная',
  },
  {
    type: 'type',
    name: 'snapshot',
    checked: false,
    title: 'Моментальная',
  },
  {
    type: 'type',
    name: 'collection',
    checked: false,
    title: 'Коллекционная',
  },
  {
    type: 'level',
    name: 'zero',
    checked: false,
    title: 'Нулевой',
  },
  {
    type: 'level',
    name: 'non-professional',
    checked: false,
    title: 'Любительский',
  },
  {
    type: 'level',
    name: 'professional',
    checked: false,
    title: 'Профессиональный',
  }
];
