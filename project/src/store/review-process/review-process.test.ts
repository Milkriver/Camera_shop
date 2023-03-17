import { mockReviews } from '../../test-mock/review';
import { fetchOfferReviewsAction } from '../api-actions';
import { changeModalState, reviewProcess, TInitialState } from './review-process';

describe('Reducer: review', () => {
  let state: TInitialState;
  beforeEach(() => {
    state = {
      offerReviews: undefined,
      reviewModalState: false,
    };
  });
  const mockState = {
    offerReviews: undefined,
    reviewModalState: true,
  };

  it('should get reviewModalState by a given value', () => {
    expect(reviewProcess.reducer(state, changeModalState(true)).reviewModalState)
      .toEqual(mockState.reviewModalState);
  });

  it('should update reviews if fetchOfferReviewsAction fulfilled', () => {
    const reviews = mockReviews;
    expect(reviewProcess.reducer(state, { type: fetchOfferReviewsAction.fulfilled.type, payload: reviews }).offerReviews)
      .toEqual(reviews);
  });
});
