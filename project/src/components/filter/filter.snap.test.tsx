import { configureMockStore } from '@jedmao/redux-mock-store';
import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import thunk from 'redux-thunk';
import Filter from './filter';

const history = createMemoryHistory();

describe('Component: Filter', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      DATA: {
        activePaginationPage: 1,
      },
      OFFERS: {
        offers: []
      },
      FILTERS: {
        category: '',
        minPrice: '',
        maxPrice: '',
        sortType: '',
        orderType: '',
        type: '',
      }
    });
    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Filter />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
