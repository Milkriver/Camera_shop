import { configureMockStore } from '@jedmao/redux-mock-store';
import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import thunk from 'redux-thunk';
import SortForm from './sort-form';

const history = createMemoryHistory();

describe('Component: SortForm', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
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
          <SortForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
