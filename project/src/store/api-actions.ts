import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoutes } from '../const';
import { TOfferItem, TPromoOffer, TReview, TReviewPost } from '../types/offers.js';
import { setNewComment } from './actions';

export const fetchPromoOfferAction = createAsyncThunk<TPromoOffer, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchPromoOffer',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TPromoOffer>(APIRoutes.Promo);
    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<TOfferItem[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOfferItem[]>(APIRoutes.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<TOfferItem, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TOfferItem>(`${APIRoutes.Offers}/${id}`);
    return data;
  },
);

export const fetchSimilarOffersAction = createAsyncThunk<TOfferItem[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchSimilarOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TOfferItem[]>(`${APIRoutes.Offers}/${id}/similar`);
    return data;
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<TReview[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOfferReviewsAction',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TReview[]>(`${APIRoutes.Offers}/${id}/reviews`);
    return data;
  },
);

export const addNewCommentAction = createAsyncThunk<void, TReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/addNewComment',
  async ( review, { dispatch, extra: api }) => {
    const { data } = await api.post<TReviewPost>(APIRoutes.Reviews, review);
    dispatch(setNewComment(data));
  },
);
