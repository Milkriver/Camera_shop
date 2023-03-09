import { NameSpace } from '../../const';
import { TOfferItem, TPromoOffer } from '../../types/offers';
import { State } from '../../types/state';

export const setPromoOfferPage = (state: State):TPromoOffer => state[NameSpace.Offers].promoOffer;
export const setOffersPage = (state: State):TOfferItem[] => state[NameSpace.Offers].offers;
export const setOfferPage = (state: State):TOfferItem => state[NameSpace.Offers].offer;
export const setSimilarOffersPage = (state: State):TOfferItem[] => state[NameSpace.Offers].similarOffers;
