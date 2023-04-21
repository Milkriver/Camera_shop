// import FocusTrap from 'focus-trap-react';
// import { useAppDispatch } from '../../hooks';
// import { addItem, dropItem } from '../../store/order-process/order-process';
import { TOfferItem } from '../../types/offers';

type TProps = {
  product: TOfferItem;
  onClose: () => void;
  onClick: () => void;
}

function DeleteProductModal({product, onClick, onClose}: TProps): JSX.Element {
  // const dispatch = useAppDispatch();
  // const addPosition = (item: TOfferItem) => dispatch(dropItem(item));
  // const handleAddProduct = () => {
  //   addPosition(product);
  //   onClose();
  // };
  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClick}></div>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type={`/${product.previewImgWebp}`} srcSet={`/${product.previewImgWebp2x}`} />
                <img src={`/${product.previewImg}`} srcSet={`/${product.previewImg2x}`} width="140" height="120" alt={product.name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{product.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул: </span>
                  <span className="basket-item__number">{product.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{`${product.type} фотокамера`}</li>
                <li className="basket-item__list-item">{`${product.level} уровень`}</li>
              </ul>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--half-width" type="button">Удалить</button>
            <div className="btn btn--transparent modal__btn modal__btn--half-width" onClick={onClose}>Продолжить покупки
            </div>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClick}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;
