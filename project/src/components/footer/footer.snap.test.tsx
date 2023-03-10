import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Footer from './footer';


const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const {container} = render(
        <HistoryRouter history={history}>
        <Footer />
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});