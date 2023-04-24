import { TFilterLevel } from './../types/utils';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const';
import { TCoupon, TCouponPost, TOfferItem, TOrderPost, TPromoOffer, TReview, TReviewPost } from '../types/offers.js';
import { setNewComment } from './actions';
import { TFilterType } from '../types/utils.js';
import { getParams } from '../utils';

export const fetchPromoOfferAction = createAsyncThunk<TPromoOffer, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchPromoOffer',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TPromoOffer>(APIRoute.Promo);
    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<TOfferItem[], {
  minPrice?: string;
  maxPrice?: string;
  sortType?: string;
  orderType?: string;
  category?: string;
  typeList?: TFilterType;
  levelList?: TFilterLevel;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOffers',
  async (params, { dispatch, extra: api }) => {
    const sortParams = getParams(params);
    const { data } = await api.get<TOfferItem[]>(`${APIRoute.Offers}${sortParams ? `?${sortParams}` : ''}`);
    return data;
  },
);

export const fetchSearchedOffersAction = createAsyncThunk<TOfferItem[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchSearchedOffers',
  async (params, { dispatch, extra: api }) => {
    const { data } = await api.get<TOfferItem[]>(`${APIRoute.Offers}${`?${params}`}`);
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
    const { data } = await api.get<TOfferItem>(`${APIRoute.Offers}/${id}`);
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
    const { data } = await api.get<TOfferItem[]>(`${APIRoute.Offers}/${id}/similar`);
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
    const { data } = await api.get<TReview[]>(`${APIRoute.Offers}/${id}/reviews`);
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
  async (review, { dispatch, extra: api }) => {
    const { data } = await api.post<TReviewPost>(APIRoute.Reviews, review);
    dispatch(setNewComment(data));
  },
);

export const addCouponAction = createAsyncThunk<TCoupon, TCouponPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/addCoupon',
  async (coupon, { dispatch, extra: api }) => {
    const { data } = await api.post<number>(APIRoute.Coupon, coupon);
    return {
      coupon: coupon.coupon,
      discount: data
    };
  },
);

export const addOrderAction = createAsyncThunk<void, TOrderPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/addOrder',
  async (order, { dispatch, extra: api }) => {
    await api.post<TOrderPost>(APIRoute.Order, order);
  },
);
