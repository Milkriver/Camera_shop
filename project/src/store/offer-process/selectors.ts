import { NameSpace } from '../../const';
import { TOfferItem, TPromoOffer } from '../../types/offers';
import { State } from '../../types/state';

export const setPromoOffer = (state: State):TPromoOffer | undefined => state[NameSpace.Offers].promoOffer;
export const setOffers = (state: State):TOfferItem[] | undefined => state[NameSpace.Offers].offers;
export const setOffer = (state: State):TOfferItem | undefined => state[NameSpace.Offers].offer;
export const setSimilarOffers = (state: State):TOfferItem[] | undefined => state[NameSpace.Offers].similarOffers;
