import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { TOfferItem, TPromoOffer, TReview, TReviewPost } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const loadPromoOffer = createAction<TPromoOffer>('offer/loadPromoOffer');
export const loadOffers = createAction<TOfferItem[]>('offer/loadOffers');
export const setNewComment = createAction<TReviewPost>('offers/setNewComment');
export const loadOffer = createAction<TOfferItem>('offer/loadOffer');
export const loadSimilarOffers = createAction<TOfferItem[]>('offer/loadSimilarOffers');
export const loadReviews = createAction<TReview[]>('offer/loadReviews');
export const changeActivePaginationPage = createAction<number>('data/changeActivePaginationPage');
export const changeModalState = createAction<boolean>('data/changeModalState');

