import { Link } from 'react-router-dom';

type IProps = {
  classname: string;
}

function NavMenu({classname}: IProps): JSX.Element {
  const prefix = `${classname}__`;
  return (
    <ul className={`${prefix}list`}>
      <li className={`${prefix}item`}><Link className={`${(prefix === 'main-nav__') ? prefix : '' }link`} to="catalog.html">Каталог</Link></li>
      <li className={`${prefix}item`}><Link className={`${(prefix === 'main-nav__') ? prefix : '' }link`} to="#">Гарантии</Link></li>
      <li className={`${prefix}item`}><Link className={`${(prefix === 'main-nav__') ? prefix : '' }link`} to="#">Доставка</Link></li>
      <li className={`${prefix}item`}><Link className={`${(prefix === 'main-nav__') ? prefix : '' }link`} to="#">О компании</Link></li>
    </ul>
  );
}

export default NavMenu;
