import { useCallback, useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, STARS } from '../../const';
import { useAppSelector } from '../../hooks';
import { positionsSelector } from '../../store/order-process/selectors';
import { TOfferItem } from '../../types/offers';
import AddProductModalSuccess from '../add-product-modal-success/add-product-modal-success';
import AddProductModal from '../add-product-modal/add-product-modal';


type IProps = {
  product: TOfferItem;
  isActive?: boolean;
}

function ProductCard({ product, isActive }: IProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const positionList = useAppSelector(positionsSelector);
  const isProductInBasket = positionList.find((item) => item.item.id === product.id);

  useEffect(() => {
    document.body.style.overflow = (isModalOpen) ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isSuccessModalOpen]);

  const ecsPress = useCallback((event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      setIsModalOpen(false);
      setIsSuccessModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', ecsPress);
    return () => {
      document.removeEventListener('keydown', ecsPress);
    };
  }, [ecsPress]);

  const handleClickForm = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
  };
  const handleModalProductClose = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  const handleSuccessModalClose = () => setIsSuccessModalOpen(false);
  return (
    <div className={`product-card ${isActive ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source type={`/${product.previewImgWebp}`} srcSet={`/${product.previewImgWebp2x}`} />
          <img src={`/${product.previewImg}`} srcSet={`/${product.previewImg2x}`} width="280" height="240" alt={product.name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {
            Array.from({ length: STARS }, (_, index) => (
              <svg width="17" height="16" aria-hidden="true" key={index}>
                {product.rating > index && <use xlinkHref="#icon-full-star" />}
                {product.rating <= index && <use xlinkHref="#icon-star" />}
              </svg>
            ))
          }
          <p className="visually-hidden">Рейтинг: {product.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{product.reviewCount}</p>
        </div>
        <p className="product-card__title">{product.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{product.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {
          isProductInBasket
            ?
            <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart" to={AppRoute.Basket}>
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-basket"/>
              </svg>В корзине
            </Link>
            :
            <button
              className="btn btn--purple product-card__btn"
              type="button"
              onClick={handleClickForm}
            >Купить
            </button>
        }
        <Link className="btn btn--transparent" to={generatePath(AppRoute.Product, { id: String(product.id) })}>Подробнее</Link>
      </div>
      {isModalOpen && <AddProductModal product = {product} onClose={handleModalProductClose} onClick={handleModalClose}/>}
      {isSuccessModalOpen && <AddProductModalSuccess onClose={handleSuccessModalClose} onClick={handleModalClose} />}
    </div>
  );
}

export default ProductCard;
