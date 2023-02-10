import { Link } from 'react-router-dom';
import { IOfferItem } from '../../types/offers';

type IProps = {
  product: IOfferItem;
}

const STARS = 5;
const renderFullStar = () => <svg width="17" height="16" aria-hidden="true"><use xlinkHref="img/sprite_auto.svg#icon-full-star"></use></svg>;
const renderEmptyStar = () => <svg width="17" height="16" aria-hidden="true"><use xlinkHref="img/sprite_auto.svg#icon-star"></use></svg>;

function ProductCard({product}: IProps): JSX.Element {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type={product.previewImgWebp} srcSet={product.previewImgWebp2x}/>
          <img src={product.previewImg} srcSet={product.previewImg2x} width="280" height="240" alt={product.name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {Array(product.rating).fill(renderFullStar())}
          {Array(STARS - product.rating).fill(renderEmptyStar())}
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
        <Link className="btn btn--transparent" to="#">Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
