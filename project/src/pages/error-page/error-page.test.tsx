import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import ErrorPage from './error-page';

const mockStore = configureMockStore();

describe('Component: ErrorPage', () => {
  it('should render correctly', () => {
    const store = mockStore({
      OFFERS: {
        searchedOffers: []
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
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ErrorPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Упс... Что-то пошло не так.../i)).toBeInTheDocument();
  });
});
