import { TFilterLevel } from './../types/utils';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../const';
import { TCouponPost, TOfferItem, TPromoOffer, TReview, TReviewPost } from '../types/offers.js';
import { setCoupon, setNewComment } from './actions';
import { TFilterType } from '../types/utils.js';

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
  sortType?:string;
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
    const { sortType, orderType, minPrice, maxPrice, category, typeList, levelList } = params;
    const filterParams = new URLSearchParams();
    if(sortType){
      filterParams.append('_sort', sortType);
    }
    if(orderType){
      filterParams.append('_order', orderType);
    }
    if(minPrice){
      filterParams.append('price_gte', minPrice);
    }
    if(maxPrice){
      filterParams.append('price_lte', maxPrice);
    }
    if(category){
      filterParams.append('category', category === 'videocamera' ? 'Видеокамера' : 'Фотоаппарат');
    }
    if(typeList?.digital){
      filterParams.append('type', 'Цифровая');
    }
    if(typeList?.film){
      filterParams.append('type', 'Плёночная');
    }
    if(typeList?.snapshot){
      filterParams.append('type', 'Моментальная');
    }
    if(typeList?.collection){
      filterParams.append('type', 'Коллекционная');
    }
    if(levelList?.zero){
      filterParams.append('level', 'Нулевой');
    }
    if(levelList?.nonprofessional){
      filterParams.append('level', 'Любительский');
    }
    if(levelList?.professional){
      filterParams.append('level', 'Профессиональный');
    }
    const sortParams = filterParams.toString();
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
  async ( review, { dispatch, extra: api }) => {
    const { data } = await api.post<TReviewPost>(APIRoute.Reviews, review);
    dispatch(setNewComment(data));
  },
);

export const addCouponAction = createAsyncThunk<void, TCouponPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/addCoupon',
  async ( coupon, { dispatch, extra: api }) => {
    const { data } = await api.post<TCouponPost>(APIRoute.Coupon, coupon);
    dispatch(setCoupon(data));
  },
);
