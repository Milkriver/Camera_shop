import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TFilterType } from '../../types/utils';

export type TInitialState = {
    minPrice: string;
    maxPrice: string;
    sortType: string;
    orderType: string;
    category: string;
    type: TFilterType;
  };

const initialState: TInitialState = {
  minPrice: '',
  maxPrice: '',
  sortType: '',
  orderType: '',
  category: '',
  type: {
    digital: false,
    film: false,
    snapshot: false,
    collection: false,
  },
};


export const filterProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeMinPrice: (state, action: {payload: string; type: string}) => {
      state.minPrice = action.payload;
    },
    changeMaxPrice: (state, action: {payload: string; type: string}) => {
      state.maxPrice = action.payload;
    },
    changeSortType: (state, action: {payload: string; type: string}) => {
      state.sortType = action.payload;
    },
    changeOrderType: (state, action: {payload: string; type: string}) => {
      state.orderType = action.payload;
    },
    changeCategory: (state, action: {payload: string; type: string}) => {
      state.category = action.payload;
    },
    changeType: (state, action: {payload: TFilterType; type: string}) => {
      state.type = action.payload;
    },
  },
});

export const {
  changeMinPrice,
  changeMaxPrice,
  changeSortType,
  changeOrderType,
  changeCategory,
  changeType
} = filterProcess.actions;
