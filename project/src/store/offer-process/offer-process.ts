import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferItem, TPromoOffer } from '../../types/offers';
import { fetchSearchedOffersAction, fetchOfferAction, fetchOffersAction, fetchPromoOfferAction, fetchSimilarOffersAction } from '../api-actions';

export type TInitialState = {
  promoOffer: TPromoOffer | undefined;
  offers: TOfferItem[] | undefined;
  offer: TOfferItem | undefined;
  similarOffers: TOfferItem[] | undefined;
  searchedOffers: TOfferItem[] | undefined;
  isDataLoading: boolean;
  hasError: boolean;
  };

const initialState: TInitialState = {
  promoOffer: undefined,
  offers: undefined,
  offer: undefined,
  similarOffers: undefined,
  searchedOffers: undefined,
  isDataLoading: false,
  hasError: false,
};


export const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPromoOfferAction.fulfilled, (state, action)=>{
        state.isDataLoading = false;
        state.promoOffer = action.payload;
      })
      .addCase(fetchPromoOfferAction.pending, (state)=>{
        state.isDataLoading = true;
      })
      .addCase(fetchPromoOfferAction.rejected, (state)=>{
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action)=>{
        state.isDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.pending, (state)=>{
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state)=>{
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSearchedOffersAction.fulfilled, (state, action) => {
        state.searchedOffers = action.payload;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action)=>{
        state.isDataLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state)=>{
        state.isDataLoading = true;
      })
      .addCase(fetchOfferAction.rejected, (state)=>{
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSimilarOffersAction.fulfilled, (state, action)=>{
        state.isDataLoading = false;
        state.similarOffers = action.payload;
      })
      .addCase(fetchSimilarOffersAction.pending, (state)=>{
        state.isDataLoading = true;
      })
      .addCase(fetchSimilarOffersAction.rejected, (state)=>{
        state.isDataLoading = false;
        state.hasError = true;
      });
  },
});
