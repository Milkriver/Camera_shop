import { NameSpace } from '../../const';
import { TOrderPosition } from '../../types/offers';
import { State } from '../../types/state';


export const positionsSelector = (state: State): TOrderPosition[] => state[NameSpace.Order].positions;
export const sumSelector = (state: State): number => state[NameSpace.Order].sum;
export const countSelector = (state: State): number => state[NameSpace.Order].count;
