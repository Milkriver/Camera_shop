import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddProductModal from './add-product-modal';

describe('AddProductModal', () => {
  test('loads and displays AddProductModal', async () => {
    render(<AddProductModal/>);
    const button = await screen.findByText('Добавить товар в корзину');
    expect(button).toHaveTextContent('Добавить товар в корзину');
  });
});
