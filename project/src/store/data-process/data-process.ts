import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type TInitialState = {
    activePaginationPage: number;
    reviewModalState: boolean;
};

const initialState: TInitialState = {
  activePaginationPage: 1,
  reviewModalState: false
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeActivePaginationPage: (state, action) => {
      state.activePaginationPage = action.payload;
    },
    changeModalState: (state, action) => {
      state.reviewModalState = action.payload;
    },
  },
});

export const {
  changeActivePaginationPage,
  changeModalState
} = dataProcess.actions;
