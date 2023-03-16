import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Header from './header';


const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <Header />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
