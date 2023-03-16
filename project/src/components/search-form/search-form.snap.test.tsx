import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import SearchForm from './search-form';

const history = createMemoryHistory();

describe('Component: SearchForm', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <SearchForm />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
