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

export const filterCategoryItem = [
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

export const filterTypeItem = [
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

export const filterLevelItem = [
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
