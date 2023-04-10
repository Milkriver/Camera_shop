import { configureMockStore } from '@jedmao/redux-mock-store';
import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import thunk from 'redux-thunk';
import SearchForm from './search-form';
import { Provider } from 'react-redux';

const history = createMemoryHistory();

describe('Component: SearchForm', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      DATA: {
        activePaginationPage: 1,
      },
      OFFERS: {
        searchedProducts: []
      }
    });
    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SearchForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
