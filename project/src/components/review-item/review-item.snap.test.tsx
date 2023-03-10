import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ReviewItem from './review-item';

const history = createMemoryHistory();
const mockReview = {
        id: '',
        userName: '',
        advantage: '',
        disadvantage: '',
        review: '',
        rating: 1,
        createAt: '',
        cameraId: 1,
};


describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const {container} = render(
        <HistoryRouter history={history}>
            <ReviewItem review={mockReview}/>
        </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});