import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TFilterType } from '../../types/utils';

export const setMinPrice = (state: State): string => state[NameSpace.Filters].minPrice;
export const setMaxPrice = (state: State): string => state[NameSpace.Filters].maxPrice;
export const setSortType = (state: State): string => state[NameSpace.Filters].sortType;
export const setOrderType = (state: State): string => state[NameSpace.Filters].orderType;
export const setCategory = (state: State): string => state[NameSpace.Filters].category;
export const setType = (state: State): TFilterType => state[NameSpace.Filters].type;
