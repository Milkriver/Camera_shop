import { createReducer } from '@reduxjs/toolkit';
import { IOfferItem, IPromoOffer } from '../types/offers';
import { changeActivePaginationPage, loadOffers, loadPromoOffer } from './actions';

type InitialState = {
promoOffer: IPromoOffer;
offers: IOfferItem[];
activePaginationPage: number;
};

const initialState: InitialState = {
  promoOffer: {
    id: 0,
    name: '',
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  offers: [{
    id: 0,
    name: '',
    vendorCode: '',
    type: '',
    category: '',
    description: '',
    level: '',
    rating: 0,
    price: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
    reviewCount: 0,
  }],
  activePaginationPage: 1,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromoOffer, (state, action) => {
      state.promoOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeActivePaginationPage, (state, action) => {
      state.activePaginationPage = action.payload;
    });

});

export { reducer };
