import { useAppSelector } from '../../hooks';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
// import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import SortForm from '../sort-form/sort-form';

const productsOnPage = 9;

function Main(): JSX.Element {
  const products = useAppSelector((state) => state.offers);
  const activePaginationPage = useAppSelector((state) => state.activePaginationPage);
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
      {/* <Modal/> */}
    </main>
  );
}

export default Main;
