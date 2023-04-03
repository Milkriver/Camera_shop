import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type TInitialState = {
    minPrice: string;
  };

const initialState: TInitialState = {
  minPrice: '',
};


export const filterProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeMinPrice: (state, action: {payload: string; type: string}) => {
      state.minPrice = action.payload;
    },
  },
});

export const {
  changeMinPrice
} = filterProcess.actions;
