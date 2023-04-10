import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { addNewCommentAction, fetchOfferAction, fetchOfferReviewsAction, fetchOffersAction, fetchPromoOfferAction, fetchSimilarOffersAction } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { mockOffer, mockOffers, mockPromo } from '../test-mock/offers';
import { mockReview, mockReviews } from '../test-mock/review';
import { setNewComment } from './actions';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch loading promo when GET /promo', async () => {
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);
    const store = mockStore();
    await store.dispatch(fetchPromoOfferAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchPromoOfferAction.pending.type,
      fetchPromoOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch loading offers when GET /cameras', async () => {
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchOffersAction({}));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch active offer when GET /id', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Offers}/${mockId}`).reply(200, mockOffer);
    const store = mockStore();
    await store.dispatch(fetchOfferAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch similar offers when GET /id', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Offers}/${mockId}/similar`).reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchSimilarOffersAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchSimilarOffersAction.pending.type,
      fetchSimilarOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch load reviews when GET /id/reviews', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Offers}/${mockId}/reviews`).reply(200, mockReviews);
    const store = mockStore();
    await store.dispatch(fetchOfferReviewsAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchOfferReviewsAction.pending.type,
      fetchOfferReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch addNewCommentAction when POST /reviews', async () => {
    mockAPI
      .onPost(`${APIRoute.Reviews}`)
      .reply(200);

    const store = mockStore();
    await store.dispatch(addNewCommentAction(mockReview));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      addNewCommentAction.pending.type,
      setNewComment.type,
      addNewCommentAction.fulfilled.type,
    ]);
  });
});
