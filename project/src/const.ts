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
    name: 'popular',
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
