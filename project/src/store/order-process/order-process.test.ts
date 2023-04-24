import { addItem, changeErrorStatus, changeOrderStatus, orderProcess, TInitialState } from './order-process';
import { mockOffer, mockPosition } from '../../test-mock/offers';
import { addCouponAction, addOrderAction } from '../api-actions';

describe('Reducer: order', () => {
  let state: TInitialState;
  beforeEach(() => {
    state = {
      positions: [],
      sum: 0,
      count: 0,
      coupon: null,
      discount: 0,
      isOrderSuccessed: true,
      hasError: true,
      isCouponApplied: true,
      isCouponWrong: true,
    };
  });
  const mockCoupon = '123';
  const mockDiscount = 15;
  const nullMockDiscount = 0;
  it('should get isOrderSuccessed false', () => {
    expect(orderProcess.reducer(state, changeOrderStatus()).isOrderSuccessed)
      .toEqual(false);
  });
  it('should get hasError false', () => {
    expect(orderProcess.reducer(state, changeErrorStatus()).hasError)
      .toEqual(false);
  });
  it('should add product', () => {
    expect(orderProcess.reducer(state, addItem(mockOffer)).positions)
      .toEqual(mockPosition);
  });
  it('should update coupon if addCouponAction fulfilled', () => {
    expect(orderProcess.reducer(state, { type: addCouponAction.fulfilled.type, payload: {coupon: mockCoupon, discount: mockDiscount} }).coupon)
      .toEqual(mockCoupon);
  });
  it('should update discount if addCouponAction fulfilled', () => {
    expect(orderProcess.reducer(state, { type: addCouponAction.fulfilled.type, payload: {coupon: mockCoupon, discount: mockDiscount} }).discount)
      .toEqual(mockDiscount);
  });
  it('should update coupon if addCouponAction rejected', () => {
    expect(orderProcess.reducer(state, { type: addCouponAction.rejected.type, payload: {coupon: mockCoupon, discount: mockDiscount} }).coupon)
      .toEqual(null);
  });
  it('should update discount if addCouponAction rejected', () => {
    expect(orderProcess.reducer(state, { type: addCouponAction.rejected.type, payload: {coupon: mockCoupon, discount: mockDiscount} }).discount)
      .toEqual(nullMockDiscount);
  });
  it('should update isCouponApplied if addOrderAction fulfilled', () => {
    expect(orderProcess.reducer(state, { type: addOrderAction.fulfilled.type }).isCouponApplied)
      .toEqual(false);
  });
  it('should update isCouponWrong if addOrderAction fulfilled', () => {
    expect(orderProcess.reducer(state, { type: addOrderAction.fulfilled.type }).isCouponWrong)
      .toEqual(false);
  });
});
