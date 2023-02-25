import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import CatalogPage from '../../pages/catalog-page/catalog-page';
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
        path={AppRoute.Product}
        element={<ProductPage />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;
