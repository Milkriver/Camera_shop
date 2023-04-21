import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { TCouponPost, TReviewPost } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const setNewComment = createAction<TReviewPost>('offers/setNewComment');
export const setCoupon = createAction<TCouponPost>('offers/setCoupon');
