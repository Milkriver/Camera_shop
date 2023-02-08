import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { IPromoOffer } from '../types/offers';

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const loadPromoOffer = createAction<IPromoOffer>('offer/loadPromoOffer');


