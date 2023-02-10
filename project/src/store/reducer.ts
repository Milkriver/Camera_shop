import { createReducer } from '@reduxjs/toolkit';
import { IOfferItem, IPromoOffer } from '../types/offers';
import { loadOffers, loadPromoOffer } from './actions';

type InitialState = {
promoOffer: IPromoOffer;
offers: IOfferItem[];
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
  }]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromoOffer, (state, action) => {
      state.promoOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });

});

export { reducer };
