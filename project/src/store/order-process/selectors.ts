import { NameSpace } from '../../const';
import { TOrderPosition } from '../../types/offers';
import { State } from '../../types/state';


export const positionsSelector = (state: State): TOrderPosition[] => state[NameSpace.Order].positions;
export const sumSelector = (state: State): number => state[NameSpace.Order].sum;
export const countSelector = (state: State): number => state[NameSpace.Order].count;
export const discountSelector = (state: State): number => state[NameSpace.Order].discount;
export const couponSelector = (state: State): string | null => state[NameSpace.Order].coupon;
export const isOrderSuccessedSelector = (state: State): boolean => state[NameSpace.Order].isOrderSuccessed;
export const hasErrorSelector = (state: State): boolean => state[NameSpace.Order].hasError;
