import { useCallback, useEffect, useState } from 'react';
import { ESC } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addItem, minusItem, updateItem } from '../../store/order-process/order-process';
import { TOfferItem, TOrderPosition, TUpdatedItem } from '../../types/offers';
import DeleteProductModal from '../delete-product-modal/delete-product-modal';

type IProps = {
  product: TOrderPosition;
}

function BasketItem({product}: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addPosition = (position: TOfferItem) => dispatch(addItem(position));
  const minusPosition = (position: TOrderPosition) => dispatch(minusItem(position));
  const updatePosition = (position: TUpdatedItem) => dispatch(updateItem(position));
  const handlePositionQuantity = (event: React.ChangeEvent<HTMLInputElement>, item: TOfferItem) => {
    const newCount = Number(event.target.value);
    if(isNaN(newCount) || newCount <= 0 || newCount > 99) {
      return;
    }
    updatePosition({item, newCount});
  };

  useEffect(() => {
    document.body.style.overflow = (isModalOpen) ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const pressEsc = useCallback((event: { keyCode: number }) => {
    if (event.keyCode === ESC) {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', pressEsc);
    return () => {
      document.removeEventListener('keydown', pressEsc);
    };
  }, [pressEsc]);

  const handleDeleteProduct = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return(
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`/${product.item.previewImgWebp}, /${product.item.previewImgWebp}`}/>
          <img src={`/${product.item.previewImg}`} srcSet={`/${product.item.previewImgWebp2x}`} width="140" height="120" alt={product.item.name}/>
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{product.item.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул: </span>
            <span className="basket-item__number">{product.item.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${product.item.type} фотокамера`}</li>
          <li className="basket-item__list-item">{`${product.item.level} уровень`}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{product.item.price} ₽</p>
      <div className="quantity">
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" onClick={() => minusPosition(product)}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"/>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input type="number" id="counter1" value={product.totalCount} min="1" max="99" aria-label="количество товара" onChange={(evt) => handlePositionQuantity(evt, product.item)}/>
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара" onClick={() => addPosition(product.item)}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{product.totalPrice} ₽</div>
      <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={handleDeleteProduct}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"/>
        </svg>
      </button>
      {isModalOpen && <DeleteProductModal product = {product} onClick={handleModalClose} />}
    </li>
  );
}

export default BasketItem;
