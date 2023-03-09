import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoutes } from '../const';
import { TOfferItem, TPromoOffer, TReview, TReviewPost } from '../types/offers.js';
import { loadOffer, loadOffers, loadPromoOffer, loadReviews, loadSimilarOffers, setNewComment } from './actions';

export const fetchPromoOfferAction = createAsyncThunk<TPromoOffer, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchPromoOffer',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TPromoOffer>(APIRoutes.Promo);
    dispatch(loadPromoOffer(data));
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
    dispatch(loadOffers(data));
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
    dispatch(loadOffer(data));
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
    dispatch(loadSimilarOffers(data));
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
    dispatch(loadReviews(data));
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
