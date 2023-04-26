export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Product = '/product/:id',
  Basket = '/basket',
  Error = '/error'
}

export enum APIRoute {
  Offers = '/cameras',
  Promo = '/promo',
  Reviews = '/reviews',
  Coupon = '/coupons',
  Order = '/orders'
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

export enum SortName {
  ASC = 'asc',
  DESC = 'desc'
}

export const orderTypes = [
  {
    type: 'up',
    name: SortName.ASC,
    label: 'по возрастанию'
  },
  {
    type: 'down',
    name: SortName.DESC,
    label: 'по убыванию'
  }
];

export const STARS = 5;

export const PRODUCTS_CARD_QUANTITY = 3;

export const REVIEWS_QUANTITY = 3;

export const TIMEOUT = 1000;

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Filters = 'FILTERS',
  Order = 'ORDER'
}

export enum FilterType {
  Category = 'category',
  Type = 'type',
  Level = 'level'
}

export const filterCategoryItems = [
  {
    type: 'category',
    name: 'photocamera',
    title: 'Фотокамера',
  },
  {
    type: 'category',
    name: 'videocamera',
    title: 'Видеокамера',
  },
];

export const filterTypeItems = [
  {
    type: 'type',
    name: 'digital',
    title: 'Цифровая',
  },
  {
    type: 'type',
    name: 'film',
    title: 'Плёночная',
  },
  {
    type: 'type',
    name: 'snapshot',
    title: 'Моментальная',
  },
  {
    type: 'type',
    name: 'collection',
    title: 'Коллекционная',
  },
];

export const filterLevelItems = [
  {
    type: 'level',
    name: 'zero',
    title: 'Нулевой',
  },
  {
    type: 'level',
    name: 'non-professional',
    title: 'Любительский',
  },
  {
    type: 'level',
    name: 'professional',
    title: 'Профессиональный',
  }
];

export enum Key {
  ENTER = 'Enter',
  UP = 'ArrowUp',
  DOWN = 'ArrowDown'
}

export enum KeyCode {
  ESC = 27,
  ENTER = 13
}
