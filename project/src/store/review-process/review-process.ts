import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TReview } from '../../types/offers';
import { fetchOfferReviewsAction } from '../api-actions';

export type TInitialState = {
    offerReviews: TReview[] | undefined;
    reviewModalState: boolean;
    };

const initialState: TInitialState = {
  offerReviews: undefined,
  reviewModalState: false,
};


export const reviewProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    changeModalState: (state, action: {payload: boolean; type: string}) => {
      state.reviewModalState = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action)=>{
        state.offerReviews = action.payload;
      });
  },
});

export const {
  changeModalState
} = reviewProcess.actions;
