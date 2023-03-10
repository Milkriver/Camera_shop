import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddReviewModal from './add-review-modal';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

const store = mockStore({});

describe('AddReviewModal', () => {
  test('loads and displays AddReviewModal', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(
      <Provider store={store}>
       <AddReviewModal onClose={() => {}} onClick={() => {}}/>
      </Provider>
      );
    const button = await screen.findByText('Оставить отзыв');
    expect(button).toHaveTextContent('Оставить отзыв');
  });
});
