import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import NotFoundScreen from './not-found-screen';

const mockStore = configureMockStore();

describe('Component: NotFoundScreen', () => {
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
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
