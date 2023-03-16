import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Breadcrumbs from './breadcrumbs';

const history = createMemoryHistory();
const mockName = '';


describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <Breadcrumbs name = {mockName} />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
