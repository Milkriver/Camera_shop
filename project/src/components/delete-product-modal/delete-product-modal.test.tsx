import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import DeleteProductModal from './delete-product-modal';
import { mockPosition } from '../../test-mock/offers';

describe('DeleteProductModal', () => {
  test('loads and displays DeleteProductModal', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const onClick = jest.fn();
    const store = mockStore({});
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <DeleteProductModal product={mockPosition[0]} onClick={() => onClick}/>
        </HistoryRouter>
      </Provider>,
    );
    const text = await screen.findByText('Удалить этот товар?');
    expect(text).toHaveTextContent('Удалить этот товар?');
  });
});
