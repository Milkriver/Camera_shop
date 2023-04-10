import { changeCategory, changeLevel, changeMaxPrice, changeMinPrice, changeOrderType, changeSortType, changeType, filterProcess, TInitialState } from './filter-process';

describe('Reducer: filter', () => {
  let state: TInitialState;
  beforeEach(() => {
    state = {
      minPrice: '',
      maxPrice: '',
      sortType: '',
      orderType: '',
      category: '',
      type: {
        digital: false,
        film: false,
        snapshot: false,
        collection: false,
      },
      level: {
        zero: false,
        nonprofessional: false,
        professional: false,
      }
    };
  });

  const mockType = {
    digital: true,
    film: false,
    snapshot: false,
    collection: false,
  };

  const mockLevel = {
    zero: true,
    nonprofessional: false,
    professional: false,
  };

  const mockState = {
    minPrice: '1000',
    maxPrice: '2000',
    sortType: 'abc',
    orderType: 'abc',
    category: 'unknown',
    type: {
      digital: true,
      film: false,
      snapshot: false,
      collection: false,
    },
    level: {
      zero: true,
      nonprofessional: false,
      professional: false,
    }
  };

  it('should get minPrice by a given value', () => {
    expect(filterProcess.reducer(state, changeMinPrice('1000')).minPrice)
      .toEqual(mockState.minPrice);
  });
  it('should get maxPrice by a given value', () => {
    expect(filterProcess.reducer(state, changeMaxPrice('2000')).maxPrice)
      .toEqual(mockState.maxPrice);
  });
  it('should get sortType by a given value', () => {
    expect(filterProcess.reducer(state, changeSortType('abc')).sortType)
      .toEqual(mockState.sortType);
  });
  it('should get orderType by a given value', () => {
    expect(filterProcess.reducer(state, changeOrderType('abc')).orderType)
      .toEqual(mockState.orderType);
  });
  it('should get category by a given value', () => {
    expect(filterProcess.reducer(state, changeCategory('unknown')).category)
      .toEqual(mockState.category);
  });
  it('should get type by a given value', () => {
    expect(filterProcess.reducer(state, changeType(mockType)).type)
      .toEqual(mockState.type);
  });
  it('should get level by a given value', () => {
    expect(filterProcess.reducer(state, changeLevel(mockLevel)).level)
      .toEqual(mockState.level);
  });
});
