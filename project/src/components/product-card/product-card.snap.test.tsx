import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ProductCard from './product-card';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const history = createMemoryHistory();
const mockOffer = {
  id: 1,
  name: '',
  vendorCode: '',
  type: '',
  category: '',
  description: '',
  level: '',
  rating: 1,
  price: 1,
  previewImg: '',
  previewImg2x: '',
  previewImgWebp: '',
  previewImgWebp2x: '',
  reviewCount: 1,
};

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      OFFERS: {
        offer: {},
      },
      REVIEWS: {
        reviews: {},
      },
      ORDER: {
        positions: [],
        sum: 0,
        count: 0,
        coupon: null,
        discount: 0,
        isOrderSuccessed: false,
        hasError: false,
        isCouponApplied: false,
        isCouponWrong: false,
      }
    });
    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCard isActive={false} product={mockOffer}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
