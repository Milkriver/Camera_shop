import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type IProps = {
  name?: string;
}


function Breadcrumbs({ name }: IProps): JSX.Element {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main}>Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          {name &&
          <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">{name}</span>
          </li>}

        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
