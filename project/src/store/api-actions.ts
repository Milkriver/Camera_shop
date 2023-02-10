import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoutes } from '../const';
import { IOfferItem, IPromoOffer } from '../types/offers.js';
import { loadOffers, loadPromoOffer } from './actions';

export const fetchPromoOfferAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'offers/fetchPromoOffer',
    async (_arg, { dispatch, extra: api }) => {
      const { data } = await api.get<IPromoOffer>(APIRoutes.Promo);
      dispatch(loadPromoOffer(data));
    },
  );

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'offers/fetchPromoOffer',
    async (_arg, { dispatch, extra: api }) => {
      const { data } = await api.get<IOfferItem[]>(APIRoutes.Offers);
      dispatch(loadOffers(data));
    },
  );
