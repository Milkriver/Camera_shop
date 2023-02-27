import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ReviewBlock from '../../components/review-block/review-block';
import SimilarProducts from '../../components/similar-products/similar-products';
import UpButton from '../../components/up-button/up-button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function ProductPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.offer);
  const [activeTab, setActiveTab] = useState('Details');
  const handleOverview = () => setActiveTab('Overview');
  const handleDetails = () => setActiveTab('Details');

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
  }, [dispatch, id]);

  if (isNaN(Number(id))) {
    return <NotFoundScreen />;
  }

  if (!product) {
    return <LoadingScreen />;
  }
  const changeActiveTab = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="product__tabs-text">
            {product.description}
          </div>
        );
      case 'Details':
        return (
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text"> {product.vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{product.category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{product.type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{product.level}</p>
            </li>
          </ul>
        );
      default:
        return (
          <div className="product__tabs-text">
            {product.description}
          </div>
        );
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs name={product.name} />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp}`} />
                    <img src={`/${product.previewImg}`} srcSet={`/${product.previewImgWebp2x}`} width="560" height="480" alt={product.name} />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{product.name}</h1>
                  <div className="rate product__rate">
                    {
                      Array.from({ length: 5 }, (_, index) => (
                        <svg width="17" height="16" aria-hidden="true" key={index}>
                          {product.rating > index && <use xlinkHref="#icon-full-star" />}
                          {product.rating <= index && <use xlinkHref="#icon-star" />}
                        </svg>
                      ))
                    }
                    <p className="visually-hidden">Рейтинг: {product.rating}</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{product.reviewCount}</p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{product.price} ₽</p>
                  <button className="btn btn--purple" type="button">
                    <svg width="24" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"></use>
                    </svg>Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button className={`tabs__control ${activeTab === 'Details' ? 'is-active' : ''}`} type="button" onClick={handleDetails}>Характеристики</button>
                      <button className={`tabs__control ${activeTab === 'Overview' ? 'is-active' : ''}`} type="button" onClick={handleOverview}>Описание</button>
                    </div>
                    <div className="tabs__content">
                      <div className="tabs__element is-active">
                        {changeActiveTab()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarProducts />
          </div>
          <div className="page-content__section">
            <ReviewBlock />
          </div>
        </div>
      </main>
      <UpButton />
      <Footer />
    </>);
}

export default ProductPage;
