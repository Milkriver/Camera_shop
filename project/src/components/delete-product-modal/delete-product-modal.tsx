import FocusTrap from 'focus-trap-react';
import { useAppDispatch } from '../../hooks';
import { dropItem } from '../../store/order-process/order-process';
import { TOrderPosition } from '../../types/offers';

type TProps = {
  product: TOrderPosition;
  onClick: () => void;
}

function DeleteProductModal({product, onClick}: TProps): JSX.Element {
  const dispatch = useAppDispatch();
  const dropPosition = (position: TOrderPosition) => dispatch(dropItem(position));
  const handleDeleteProduct = () => {
    dropPosition(product);
    onClick();
  };
  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClick}></div>
        <FocusTrap>
          <div className="modal__content">
            <p className="title title--h4">Удалить этот товар?</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type={`/${product.item.previewImgWebp}`} srcSet={`/${product.item.previewImgWebp2x}`} />
                  <img src={`/${product.item.previewImg}`} srcSet={`/${product.item.previewImg2x}`} width="140" height="120" alt={product.item.name} />
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
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--half-width" type="button" onClick={handleDeleteProduct}>Удалить</button>
              <div className="btn btn--transparent modal__btn modal__btn--half-width" onClick={onClick}>Продолжить покупки
              </div>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClick}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </FocusTrap>
      </div>
    </div>
  );
}

export default DeleteProductModal;
