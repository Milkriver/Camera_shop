import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type TInitialState = {
    minPrice: string;
    maxPrice: string;
    sortType: string;
    orderType: string;
  };

const initialState: TInitialState = {
  minPrice: '',
  maxPrice: '',
  sortType: '',
  orderType: '',
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
  },
});

export const {
  changeMinPrice,
  changeMaxPrice,
  changeSortType,
  changeOrderType
} = filterProcess.actions;
