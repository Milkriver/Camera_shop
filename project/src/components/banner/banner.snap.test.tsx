import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Banner from './banner';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const history = createMemoryHistory();

describe('Component: Banner', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
        OFFERS: {
            promoOffer: {}
        }
    });
    const {container} = render(
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Banner />
            </HistoryRouter>
        </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
