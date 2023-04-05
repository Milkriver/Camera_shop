import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const setMinPrice = (state: State): string => state[NameSpace.Filters].minPrice;
export const setMaxPrice = (state: State): string => state[NameSpace.Filters].maxPrice;
export const setSortType = (state: State): string => state[NameSpace.Filters].sortType;
export const setOrderType = (state: State): string => state[NameSpace.Filters].orderType;
