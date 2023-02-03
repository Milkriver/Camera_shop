import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo" to="/" aria-label="Переход на главную">
      <img src="img/sprite/icon-logo.svg" alt="logo" width="100" height="36" />
    </Link>

  );
}

export default Logo;


