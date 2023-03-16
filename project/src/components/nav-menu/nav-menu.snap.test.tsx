import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import NavMenu from './nav-menu';

const history = createMemoryHistory();
const mockClassName = '';

describe('Component: NavMenu', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <NavMenu classname={mockClassName}/>
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
