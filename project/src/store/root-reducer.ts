import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataProcess } from './data-process/data-process';
import { offerProcess } from './offer-process/offer-process';
import { reviewProcess } from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Offers]: offerProcess.reducer,
  [NameSpace.Reviews]: reviewProcess.reducer,
});
