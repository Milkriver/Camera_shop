import {render} from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import ProductPage from './product-page';


describe('Component: ProductPage', () => {
  test('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      OFFERS: {
        offers: [],
        offer: {},
        similarOffers: []
      },
      ORDER: {
        positions: [],
        sum: 0,
        count: 0,
        coupon: null,
        discount: 0,
        isOrderSuccessed: false,
        hasError: false,
        isCouponApplied: false,
        isCouponWrong: false,
      }
    });

    const history = createMemoryHistory();

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
