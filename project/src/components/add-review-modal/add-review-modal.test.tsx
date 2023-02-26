import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddReviewModal from './add-review-modal';

describe('AddReviewModal', () => {
  test('loads and displays AddReviewModal', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<AddReviewModal onClose={() => {}} onClick={() => {}}/>);
    const button = await screen.findByText('Оставить отзыв');
    expect(button).toHaveTextContent('Оставить отзыв');
  });
});
