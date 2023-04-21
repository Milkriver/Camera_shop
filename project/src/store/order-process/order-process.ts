import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferItem, TOrderPosition } from '../../types/offers';

export type TInitialState = {
  positions: TOrderPosition[];
  sum: number;
  count: number;
};

const initialState: TInitialState = {
  positions: [],
  sum: 0,
  count: 0,
};


export const OrderProcess = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {
    addItem: (state, action: { payload: TOfferItem; type: string }) => {
      const positionId = [action.payload.id, action.payload.category, action.payload.level, action.payload.name].join('||');
      const items = state.positions.slice();
      const existingPosition = items.find((x) => x.id === positionId);

      if (existingPosition) {
        existingPosition.totalCount += 1;
        existingPosition.totalPrice += action.payload.price;
      } else {
        const newPosition = {
          id: positionId,
          totalCount: 1,
          totalPrice: action.payload.price,
          item: action.payload
        };
        items.push(newPosition);
      }

      state.positions = items;
      state.sum += action.payload.price;
      state.count += 1;
    },
    minusItem: (state, action: { payload: TOrderPosition; type: string }) => {
      const lastPosition = action.payload.totalCount === 1;

      if (lastPosition) {
        const items = state.positions.filter((x) => x.id !== action.payload.id);
        state.positions = items;
        state.sum -= action.payload.item.price;
        state.count -= 1;
        return;
      }

      const items = state.positions.slice();
      const existingPosition = items.find((x) => x.id === action.payload.id);

      if (existingPosition) {
        existingPosition.totalCount -= 1;
        existingPosition.totalPrice -= action.payload.item.price;
      }

      state.positions = items;
      state.sum -= action.payload.item.price;
      state.count -= 1;
    },

    dropItem: (state, action: { payload: TOrderPosition; type: string }) => {
      const items = state.positions.filter((x) => x.id !== action.payload.id);

      state.positions = items;
      state.sum -= action.payload.totalPrice;
      state.count -= action.payload.totalCount;
    }
  },
});

export const {
  addItem,
  minusItem,
  dropItem
} = OrderProcess.actions;
