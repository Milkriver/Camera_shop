import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOfferItem, TOrderPosition, TUpdatedItem } from '../../types/offers';
import { addCouponAction, addOrderAction } from '../api-actions';

export type TInitialState = {
  positions: TOrderPosition[];
  sum: number;
  count: number;
  coupon: string | null;
  discount: number;
  isOrderSuccessed: boolean;
  hasError: boolean;
  isCouponApplied: boolean;
  isCouponWrong: boolean;
};

const initialState: TInitialState = {
  positions: [],
  sum: 0,
  count: 0,
  coupon: null,
  discount: 0,
  isOrderSuccessed: false,
  hasError: false,
  isCouponApplied: false,
  isCouponWrong: false,
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

    updateItem: (state, action: { payload: TUpdatedItem; type: string }) => {
      const positionId = [action.payload.item.id, action.payload.item.category, action.payload.item.level, action.payload.item.name].join('||');
      const items = state.positions.slice();
      const existingPosition = items.find((x) => x.id === positionId);

      if (!existingPosition) {
        throw new Error();
      }

      const oldCounter = existingPosition.totalCount;
      const newCounter = action.payload.newCount;
      existingPosition.totalCount = newCounter;
      existingPosition.totalPrice = action.payload.item.price * newCounter;

      state.positions = items;
      state.sum += (newCounter - oldCounter) * action.payload.item.price;
      state.count += (newCounter - oldCounter);
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
    },
    changeOrderStatus: (state) => {
      state.isOrderSuccessed = false;
    },
    changeErrorStatus: (state) => {
      state.hasError = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addCouponAction.fulfilled, (state, action)=>{
        state.discount = action.payload.discount;
        state.coupon = action.payload.coupon;
        state.isCouponApplied = true;
        state.isCouponWrong = false;
      })
      .addCase(addCouponAction.rejected, (state)=>{
        state.discount = 0;
        state.coupon = null;
        state.isCouponApplied = false;
        state.isCouponWrong = true;
      })
      .addCase(addOrderAction.fulfilled, (state)=>{
        state.positions = [];
        state.sum = 0;
        state.count = 0;
        state.coupon = null;
        state.discount = 0;
        state.isOrderSuccessed = true;
        state.hasError = false;
        state.isCouponApplied = false;
        state.isCouponWrong = false;
      })
      .addCase(addOrderAction.rejected, (state)=>{
        state.hasError = true;
      });
  },
});

export const {
  addItem,
  minusItem,
  updateItem,
  dropItem,
  changeOrderStatus,
  changeErrorStatus
} = OrderProcess.actions;
