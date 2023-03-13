import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type TInitialState = {
    activePaginationPage: number;
};

const initialState: TInitialState = {
  activePaginationPage: 1,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeActivePaginationPage: (state, action) => {
      state.activePaginationPage = action.payload;
    },
  },
});

export const {
  changeActivePaginationPage,
} = dataProcess.actions;
