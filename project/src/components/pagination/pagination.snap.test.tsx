import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Pagination from './pagination';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const history = createMemoryHistory();
const mockPages = [1,2,3];

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
        DATA: {
            activePaginationPage: 1,
        }
    });
    const {container} = render(
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Pagination pages={mockPages}/>
            </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
