import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { KeyCode } from '../../const';
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
  const [count, setCount] = useState(product.totalCount.toString());
  const addPosition = (position: TOfferItem) => {
    const newCount = Number(product.totalCount) + 1;
    setCount(newCount.toString());
    dispatch(addItem(position));
  };

  const minusPosition = (position: TOrderPosition) => {
    const newCount = Number(product.totalCount) - 1;
    setCount(newCount.toString());
    dispatch(minusItem(position));
  };
  const updatePosition = (position: TUpdatedItem) => dispatch(updateItem(position));
  const handlePositionCustomQuantity = (event: React.ChangeEvent<HTMLInputElement>) => setCount(event.target.value);
  const handlePositionQuantity = (item: TOfferItem) => {
    const countFixed = Number(count);
    if(isNaN(countFixed) || countFixed <= 0 || countFixed > 99) {
      setCount(product.totalCount.toString());
      toast.info('Значение должно быть от 1 до 99');
      return;
    }

    if(countFixed.toString() !== count) {
      setCount(countFixed.toString());
    }

    updatePosition({item, newCount: countFixed});
  };

  useEffect(() => {
    document.body.style.overflow = (isModalOpen) ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const pressEsc = useCallback((event: { keyCode: number }) => {
    if (event.keyCode === KeyCode.ESC) {
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
  const handleInputOver = (event: { keyCode: number }) => {
    if(event.keyCode === KeyCode.ENTER) {
      handlePositionQuantity(product.item);
    }
  };

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
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" disabled={product.totalCount < 2} onClick={() => minusPosition(product)}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"/>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input type="number" id="counter1" value={count} aria-label="количество товара"
          onBlur={() => handlePositionQuantity(product.item)}
          onKeyDown={handleInputOver}
          onChange={handlePositionCustomQuantity}
        />
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара" disabled={product.totalCount > 98} onClick={() => addPosition(product.item)}>
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
