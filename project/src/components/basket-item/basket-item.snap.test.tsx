import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { mockPosition } from '../../test-mock/offers';
import HistoryRouter from '../history-router/history-router';
import BasketItem from './basket-item';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const history = createMemoryHistory();


describe('Component: BasketItem', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      OFFERS: {
        promoOffer: {}
      }
    });
    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BasketItem product={mockPosition[0]}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
