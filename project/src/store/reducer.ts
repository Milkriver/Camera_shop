import { createReducer } from '@reduxjs/toolkit';
import { IOfferItem, IPromoOffer, IReview } from '../types/offers';
import { changeActivePaginationPage, loadOffer, loadOffers, loadPromoOffer, loadReviews, loadSimilarOffers } from './actions';

type InitialState = {
promoOffer: IPromoOffer;
offers: IOfferItem[];
activePaginationPage: number;
offer: IOfferItem;
similarOffers: IOfferItem[];
offerReviews: IReview[];
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
  offer: {
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
  },
  activePaginationPage: 1,
  similarOffers: [{
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
  offerReviews: [{
    id: '',
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
    createAt: '',
    cameraId: 0,
  }],
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
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadSimilarOffers, (state, action) => {
      state.similarOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.offerReviews = action.payload;
    });

});

export { reducer };
