import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import AddProductModal from './add-product-modal';
import { mockOffer } from '../../test-mock/offers';

describe('AddProductModal', () => {
  test('loads and displays AddProductModal', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const onClick = jest.fn();
    const store = mockStore({});
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddProductModal product={mockOffer} onClick={() => onClick} onClose={() => onClick}/>
        </HistoryRouter>
      </Provider>,
    );
    const text = await screen.findByText('Добавить товар в корзину');
    expect(text).toHaveTextContent('Добавить товар в корзину');
  });
});
