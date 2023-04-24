import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ErrorPage from '../../pages/error-page/error-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ProductPage from '../../pages/product-page/product-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<CatalogPage />}
      />
      <Route
        path={AppRoute.Catalog}
        element={<CatalogPage />}
      />
      <Route
        path={AppRoute.Product}
        element={<ProductPage />}
      />
      <Route
        path={AppRoute.Basket}
        element={<BasketPage />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
      <Route
        path={AppRoute.Error}
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default App;
