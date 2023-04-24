import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import AddOrderModalSuccess from './add-order-modal-success';

describe('AddOrderModalSuccess', () => {
  test('loads and displays AddOrderModalSuccess', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const onClick = jest.fn();
    const store = mockStore({});
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddOrderModalSuccess onClick={() => onClick} />
        </HistoryRouter>
      </Provider>,
    );
    const text = await screen.findByText('Спасибо за покупку');
    expect(text).toHaveTextContent('Спасибо за покупку');
  });
});
