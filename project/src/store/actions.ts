import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { IOfferItem, IPromoOffer, IReview, IReviewPost } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const loadPromoOffer = createAction<IPromoOffer>('offer/loadPromoOffer');
export const loadOffers = createAction<IOfferItem[]>('offer/loadOffers');
export const changeActivePaginationPage = createAction<number>('service/changeActivePaginationPage');
export const loadOffer = createAction<IOfferItem>('offer/loadOffer');
export const loadSimilarOffers = createAction<IOfferItem[]>('offer/loadSimilarOffers');
export const loadReviews = createAction<IReview[]>('offer/loadReviews');
export const changeModalState = createAction<boolean>('data/changeModalState');
export const setNewComment = createAction<IReviewPost>('offers/setNewComment');
