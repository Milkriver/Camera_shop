import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoutes } from '../const';
import { IOfferItem, IPromoOffer, IReview, IReviewPost } from '../types/offers.js';
import { loadOffer, loadOffers, loadPromoOffer, loadReviews, loadSimilarOffers, setNewComment } from './actions';

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

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<IOfferItem>(`${APIRoutes.Offers}/${id}`);
    dispatch(loadOffer(data));
  },
);

export const fetchSimilarOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchSimilarOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<IOfferItem[]>(`${APIRoutes.Offers}/${id}/similar`);
    dispatch(loadSimilarOffers(data));
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOfferReviewsAction',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<IReview[]>(`${APIRoutes.Offers}/${id}/reviews`);
    dispatch(loadReviews(data));
  },
);

export const addNewCommentAction = createAsyncThunk<void, IReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/addNewComment',
  async ( review, { dispatch, extra: api }) => {
    const { data } = await api.post<IReviewPost>(APIRoutes.Reviews, review);
    dispatch(setNewComment(data));
  },
);
