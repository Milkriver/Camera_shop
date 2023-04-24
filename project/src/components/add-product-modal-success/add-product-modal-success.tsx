import FocusTrap from 'focus-trap-react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TProps = {
  onClose: () => void;
  onClick: () => void;
}

function AddProductModalSuccess({ onClick, onClose}: TProps): JSX.Element {
  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClick}></div>
        <FocusTrap focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
        >
          <div className="modal__content">
            <p className="title title--h4">Товар успешно добавлен в корзину</p>
            <svg className="modal__icon" width="86" height="80" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <div className="modal__buttons">
              <div className="btn btn--transparent modal__btn" onClick={onClose}>Продолжить покупки</div>
              <Link className="btn btn--purple modal__btn modal__btn--fit-width" to={AppRoute.Basket}>Перейти в корзину</Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
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

export default AddProductModalSuccess;
