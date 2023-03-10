import { NameSpace } from '../../const';
import { TReview } from '../../types/offers';
import { State } from '../../types/state';

export const setOfferReviews = (state: State):TReview[] | undefined => state[NameSpace.Reviews].offerReviews;
export const setReviewModalState = (state: State):boolean => state[NameSpace.Reviews].reviewModalState;
