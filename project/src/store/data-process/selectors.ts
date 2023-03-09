import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const setActivePaginationPage = (state: State):number => state[NameSpace.Data].activePaginationPage;
