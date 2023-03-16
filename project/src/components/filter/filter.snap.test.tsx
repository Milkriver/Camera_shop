import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Filter from './filter';

const history = createMemoryHistory();

describe('Component: Filter', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <Filter />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
