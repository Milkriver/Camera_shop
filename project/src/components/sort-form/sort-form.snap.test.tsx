import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import SortForm from './sort-form';

const history = createMemoryHistory();

describe('Component: SortForm', () => {
  it('should render correctly', () => {
    const {container} = render(
        <HistoryRouter history={history}>
        <SortForm />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});