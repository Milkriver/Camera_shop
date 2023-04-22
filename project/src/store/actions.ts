import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { TReviewPost } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const setNewComment = createAction<TReviewPost>('offers/setNewComment');
