import { generatePath, Link } from 'react-router-dom';
import { AppRoute, STARS } from '../../const';
import { TOfferItem } from '../../types/offers';


type IProps = {
  product: TOfferItem;
  isActive?: boolean;
}

function ProductCard({ product, isActive }: IProps): JSX.Element {

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
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link className="btn btn--transparent" to={generatePath(AppRoute.Product, { id: String(product.id) })}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
