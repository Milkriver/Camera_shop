import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoutes } from '../const';
import { IPromoOffer } from '../types/offers.js';
import { loadPromoOffer } from './actions';

export const fetchPromoOffersAction = createAsyncThunk<void, undefined, {
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
