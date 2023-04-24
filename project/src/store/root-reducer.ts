import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataProcess } from './data-process/data-process';
import { filterProcess } from './filter-process/filter-process';
import { offerProcess } from './offer-process/offer-process';
import { orderProcess } from './order-process/order-process';
import { reviewProcess } from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Offers]: offerProcess.reducer,
  [NameSpace.Reviews]: reviewProcess.reducer,
  [NameSpace.Filters]: filterProcess.reducer,
  [NameSpace.Order]: orderProcess.reducer,
});
