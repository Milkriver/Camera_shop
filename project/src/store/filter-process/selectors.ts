import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const setMinPrice = (state: State): string => state[NameSpace.Filters].minPrice;
