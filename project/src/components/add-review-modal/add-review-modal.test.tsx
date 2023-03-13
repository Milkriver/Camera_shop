import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import AddReviewModal from './add-review-modal';

describe('AddReviewModal', () => {
  test('loads and displays AddReviewModal', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const onClick = jest.fn();
    const store = mockStore({
      OFFERS: {
        offer: {},
      },
    });
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewModal onClick={() => onClick} onClose={() => onClick}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Нужно оценить товар')).toBeInTheDocument();
    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
  });
});
