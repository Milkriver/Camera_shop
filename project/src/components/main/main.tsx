import { useAppSelector } from '../../hooks';
import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
// import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import SortForm from '../sort-form/sort-form';

function Main(): JSX.Element {
  const products = useAppSelector((state) => state.offers);
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
                  {products.map((product) => <ProductCard product={product} key={product.id}/>)}
                </div>
                <div className="pagination">
                  <Pagination/>
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
