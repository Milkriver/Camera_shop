import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import SearchForm from '../search-form/search-form';
import NavMenu from '../nav-menu/nav-menu';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo/>
        <nav className="main-nav header__main-nav">
          <NavMenu classname='main-nav'/>
        </nav>
        <div className="form-search">
          <SearchForm/>
          <button className="form-search__reset" type="reset">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg><span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <Link className="header__basket-link" to="#">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;


