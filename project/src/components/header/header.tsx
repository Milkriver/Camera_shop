import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import SearchForm from '../search-form/search-form';
import NavMenu from '../nav-menu/nav-menu';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { countSelector } from '../../store/order-process/selectors';

function Header(): JSX.Element {
  const itemsCount = useAppSelector(countSelector);
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo/>
        <nav className="main-nav header__main-nav">
          <NavMenu classname='main-nav'/>
        </nav>
        <SearchForm/>
        <Link className="header__basket-link" to={AppRoute.Basket}>
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          {itemsCount > 0 && <span className="header__basket-count">{itemsCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
