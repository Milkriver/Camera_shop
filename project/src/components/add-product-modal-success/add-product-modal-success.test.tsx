import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import AddProductModalSuccess from './add-product-modal-success';

describe('AddProductModalSuccess', () => {
  test('loads and displays AddProductModalSuccess', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const onClick = jest.fn();
    const store = mockStore({});
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddProductModalSuccess onClick={() => onClick} onClose={() => onClick}/>
        </HistoryRouter>
      </Provider>,
    );
    const text = await screen.findByText('Товар успешно добавлен в корзину');
    expect(text).toHaveTextContent('Товар успешно добавлен в корзину');
  });
});
