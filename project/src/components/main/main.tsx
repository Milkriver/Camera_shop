import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { setActivePaginationPage } from '../../store/data-process/selectors';
import { setOffers } from '../../store/offer-process/selectors';
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
  if(!products){
    return <LoadingScreen/>;
  }
  const start = productsOnPage * (activePaginationPage - 1);
  const pages = Array(Math.ceil(products.length / productsOnPage)).fill(0).map((element, index) => index + 1);
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
                <div className="cards catalog__cards">
                  {products.slice(start, start + productsOnPage).map((product) => <ProductCard product={product} key={product.id}/ >)}
                </div>
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
