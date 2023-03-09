import { TReview } from "../../types/offers";

type TInitialState = {
    offerReviews: TReview[] | undefined;
    reviewModalState: boolean;
    };
    
    const initialState: TInitialState = {
      offerReviews: undefined,
      reviewModalState: false,
    };