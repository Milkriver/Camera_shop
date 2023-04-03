import { mockOffer, mockOffers, mockPromo } from '../../test-mock/offers';
import { fetchOfferAction, fetchOffersAction, fetchPromoOfferAction, fetchSimilarOffersAction } from '../api-actions';
import { offerProcess, TInitialState } from './offer-process';

describe('Reducer: review', () => {
  let state: TInitialState;
  beforeEach(() => {
    state = {
      promoOffer: undefined,
      offers: undefined,
      offer: undefined,
      similarOffers: undefined,
      isDataLoading: false,
      hasError: false,
      searchedOffers: undefined,
    };
  });

  it('should update promo if fetchPromoOfferAction fulfilled', () => {
    expect(offerProcess.reducer(state, { type: fetchPromoOfferAction.fulfilled.type, payload: mockPromo }).promoOffer)
      .toEqual(mockPromo);
  });
  it('should update offers if fetchOffersAction fulfilled', () => {
    expect(offerProcess.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: mockOffers }).offers)
      .toEqual(mockOffers);
  });
  it('should update offer if fetchOfferAction fulfilled', () => {
    expect(offerProcess.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: mockOffer }).offer)
      .toEqual(mockOffer);
  });
  it('should update similar offers if fetchSimilarOffersAction fulfilled', () => {
    expect(offerProcess.reducer(state, { type: fetchSimilarOffersAction.fulfilled.type, payload: mockOffers }).similarOffers)
      .toEqual(mockOffers);
  });
});
