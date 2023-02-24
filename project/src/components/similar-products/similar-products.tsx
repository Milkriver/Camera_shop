import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PRODUCTS_CARD_QUANTITY } from '../../const';
import { useAppSelector } from '../../hooks';
import { fetchSimilarOffersAction } from '../../store/api-actions';
import { AppDispatch } from '../../types/state';
import ProductCard from '../product-card/product-card';


function SimilarProducts(): JSX.Element {
  const product = useAppSelector((state) => state.offer);
  const similarProducts = useAppSelector((state) => state.similarOffers);
  const [start, setStart] = useState(0);
  const end = start + PRODUCTS_CARD_QUANTITY;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
    dispatch(fetchSimilarOffersAction(product.id));
  },[dispatch, product.id]);
  const handleIncClick = () => setStart(start + PRODUCTS_CARD_QUANTITY);
  const handleDecClick = () => setStart(start - PRODUCTS_CARD_QUANTITY);
  return (
    <section className="product-similar">
      {(similarProducts) &&
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {similarProducts.map((element, index) => <ProductCard product = {element} key={element.id} isActive={index >= start && index < end}/>)}
          </div>
          <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" onClick={handleDecClick} disabled={start > 0}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="img/sprite_auto.svg#icon-arrow"></use>
            </svg>
          </button>
          <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" onClick={handleIncClick}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="img/sprite_auto.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div> }
    </section>
  );
}

export default SimilarProducts;
