import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { fetchOffersAction } from '../../store/api-actions';
import { setActivePaginationPage } from '../../store/data-process/selectors';
import { setCategory, setLevel, setMaxPrice, setMinPrice, setOrderType, setSortType, setType } from '../../store/filter-process/selectors';
import { setIsDataLoading, setOffers } from '../../store/offer-process/selectors';
import { getParams } from '../../utils';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import SortForm from '../sort-form/sort-form';

const productsOnPage = 9;

function Main(): JSX.Element {
  const products = useAppSelector(setOffers);
  const activePaginationPage = useAppSelector(setActivePaginationPage);
  const navigate = useNavigate();
  const minPrice = useAppSelector(setMinPrice);
  const maxPrice = useAppSelector(setMaxPrice);
  const sortType = useAppSelector(setSortType);
  const orderType = useAppSelector(setOrderType);
  const category = useAppSelector(setCategory);
  const typeList = useAppSelector(setType);
  const levelList = useAppSelector(setLevel);
  const isDataLoading = useAppSelector(setIsDataLoading);
  const start = productsOnPage * (activePaginationPage - 1);
  const pages = products ? Array(Math.ceil(products.length / productsOnPage)).fill(0).map((element, index) => index + 1) : [];
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const sortParams = getParams({minPrice, maxPrice, sortType, orderType, category, typeList, levelList});
    dispatch(fetchOffersAction({minPrice, maxPrice, sortType, orderType, category, typeList, levelList}));
    navigate(`#${activePaginationPage}${sortParams}`);
  },[dispatch, navigate, orderType, sortType, minPrice, maxPrice, category, typeList, levelList, activePaginationPage ]);

  return (
    <main>
      <Banner/>
      <div className="page-content">
        <Breadcrumbs/>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <Filter/>
              </div>
              <div className="catalog__content">
                <SortForm/>
                { isDataLoading ?
                  <LoadingScreen/>
                  :
                  <div className="cards catalog__cards">
                    { products && products?.length > 0 ?
                      products.slice(start, start + productsOnPage).map((product) => <ProductCard product={product} key={product.id}/ >)
                      :
                      <div>По вашему запросу ничего не найдено</div>}
                  </div>}
                <div className="pagination">
                  <Pagination pages={pages}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
