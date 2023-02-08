import { createReducer } from '@reduxjs/toolkit';
import { IPromoOffer } from '../types/offers';
import { loadPromoOffer } from './actions';

type InitialState = {
promoOffer: IPromoOffer;
};

const initialState: InitialState = {
  promoOffer: {
    id: 0,
    name: '',
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromoOffer, (state, action) => {
      state.promoOffer = action.payload;
    });

});

export { reducer };
