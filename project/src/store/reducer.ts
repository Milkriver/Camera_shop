import { createReducer } from '@reduxjs/toolkit';
import { TOfferItem, TPromoOffer, TReview } from '../types/offers';
import { changeActivePaginationPage, changeModalState, loadOffer, loadOffers, loadPromoOffer, loadReviews, loadSimilarOffers } from './actions';

type InitialState = {
promoOffer: TPromoOffer | undefined;
offers: TOfferItem[] | undefined;
activePaginationPage: number;
offer: TOfferItem | undefined;
similarOffers: TOfferItem[] | undefined;
offerReviews: TReview[] | undefined;
reviewModalState: boolean;
};

const initialState: InitialState = {
  promoOffer: undefined,
  offers: undefined,
  offer: undefined,
  activePaginationPage: 1,
  similarOffers: undefined,
  offerReviews: undefined,
  reviewModalState: false,
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
    })
    .addCase(changeModalState, (state, action) => {
      state.reviewModalState = action.payload;
    });

});

export { reducer };
