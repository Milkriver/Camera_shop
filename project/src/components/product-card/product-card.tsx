import { Link, useNavigate } from 'react-router-dom';
import { STARS } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';
import { IOfferItem } from '../../types/offers';
import { renderEmptyStar, renderFullStar } from '../../utils';

type IProps = {
  product: IOfferItem;
}

function ProductCard({product}: IProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = (id: number) => {
    dispatch(fetchOfferAction(id));
    navigate('product');
  };
  return (
    <div className="product-card" onClick={()=>onClick(product.id)}>
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
