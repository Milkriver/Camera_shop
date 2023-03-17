import { changeActivePaginationPage, dataProcess, TInitialState } from './data-process';

describe('Reducer: data', () => {
  let state: TInitialState;
  beforeEach(() => {
    state = {
      activePaginationPage: 1,
    };
  });
  const mockState = {
    activePaginationPage: 2,
  };

  it('should get activePaginationPage by a given value', () => {
    expect(dataProcess.reducer(state, changeActivePaginationPage(2)).activePaginationPage)
      .toEqual(mockState.activePaginationPage);
  });

});

