import FocusTrap from 'focus-trap-react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TProps = {
  onClick: () => void;
}

function AddOrderModalSuccess({onClick}: TProps): JSX.Element {
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClick}></div>
        <FocusTrap>
          <div className="modal__content">
            <p className="title title--h4">Спасибо за покупку</p>
            <svg className="modal__icon" width="80" height="78" aria-hidden="true">
              <use xlinkHref="#icon-review-success"></use>
            </svg>
            <div className="modal__buttons">
              <Link className="btn btn--purple modal__btn modal__btn--fit-width" to={AppRoute.Catalog} onClick={onClick}>Вернуться к покупкам
              </Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClick}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </FocusTrap>
      </div>
    </div>

  );
}

export default AddOrderModalSuccess;


