import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ProductCard from './product-card';

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
    const {container} = render(
        <HistoryRouter history={history}>
            <ProductCard isActive={false} product={mockOffer}/>
      </HistoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});