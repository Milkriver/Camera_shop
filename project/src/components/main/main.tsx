import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import SortForm from '../sort-form/sort-form';

function Main(): JSX.Element {
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
                  <ProductCard/>
                </div>
                <div className="pagination">
                  <Pagination/>
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
