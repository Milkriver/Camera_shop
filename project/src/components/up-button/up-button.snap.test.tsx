import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import UpButton from './up-button';


const history = createMemoryHistory();

describe('Component: UpButton', () => {
  it('should render correctly', () => {
    const {container} = render(
      <HistoryRouter history={history}>
        <UpButton />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
