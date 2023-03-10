import {render} from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import SimilarProducts from './similar-products';



describe('Component: SimilarProducts', () => {
  test('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
        OFFERS: {
            offers: [],
        }
    });

    const history = createMemoryHistory();

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SimilarProducts />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
