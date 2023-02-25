// import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';

type IProps = {
  isModalOpen: boolean;
};

function AddReviewModalSuccess({ isModalOpen }: IProps): JSX.Element {
  // const isModalOpen = useAppSelector((state) => state.reviewModalState);
  const classname = `modal ${isModalOpen ? 'is-active modal--narrow' : ''}`;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);


  return (
    <div className={classname}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="img/sprite_auto.svg#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">Вернуться к покупкам
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="img/sprite_auto.svg#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReviewModalSuccess;


