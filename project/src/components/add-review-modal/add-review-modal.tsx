import { useAppSelector } from '../../hooks';
import React, { FormEvent, useState } from 'react';
import { STARS } from '../../const';
import { addNewCommentAction, fetchOfferReviewsAction } from '../../store/api-actions';
import { TReviewPost } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { setOffer } from '../../store/offer-process/selectors';
import FocusTrap from 'focus-trap-react';

type IProps = {
  onClose: () => void;
  onClick: () => void;
};

const ratingStars = [
  { title: 'Отлично', id: 5, },
  { title: 'Хорошо', id: 4, },
  { title: 'Нормально', id: 3, },
  { title: 'Плохо', id: 2, },
  { title: 'Ужасно', id: 1, },
];
const MIN_COMMENT_LENGTH = 1;

function AddReviewModal({ onClose, onClick }: IProps): JSX.Element {
  const snowflakeIcon = <svg width="9" height="9" aria-hidden="true"><use xlinkHref="#icon-snowflake"></use></svg>;
  const dispatch = useAppDispatch();
  const product = useAppSelector(setOffer);
  const [userName, setUserName] = useState<string>('');
  const [advantage, setAdvantage] = useState<string>('');
  const [disadvantage, setDisadvantage] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [statusSubmit, setStatusSubmit] = useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  const handleAdvantageChange = (event: React.ChangeEvent<HTMLInputElement>) => setAdvantage(event.target.value);
  const handleDisadvantageChange = (event: React.ChangeEvent<HTMLInputElement>) => setDisadvantage(event.target.value);
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value);
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value));
  const onSubmit = (review: TReviewPost) => {
    dispatch(addNewCommentAction(review));
    if (product) {
      dispatch(fetchOfferReviewsAction(product.id));
    }
    setStatusSubmit(false);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setStatusSubmit(true);
    if (comment !== null && rating !== null && product) {
      onSubmit(
        {
          cameraId: product.id,
          userName: userName,
          advantage: advantage,
          disadvantage: disadvantage,
          review: comment,
          rating: Number(rating),
        }
      );
      setUserName('');
      setAdvantage('');
      setDisadvantage('');
      setComment('');
      setRating(0);
      onClose();
    }
  };


  return (
    <div className='modal is-active'>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClick}></div>
        <FocusTrap focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
        >
          <div className="modal__content" id='modal'>
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form onSubmit={handleSubmit}>
                <div className="form-review__rate">
                  <fieldset className="rate form-review__item">
                    <legend className="rate__caption">Рейтинг{snowflakeIcon}
                    </legend>
                    <div className="rate__bar">
                      <div className="rate__group">
                        {ratingStars.map((star) => (
                          <React.Fragment key={star.id}>
                            <input
                              className="visually-hidden"
                              id={`star-${star.id}`}
                              name="rate"
                              type="radio"
                              value={star.id}
                              onChange={handleRatingChange}
                              checked={rating === star.id}
                            />
                            <label className="rate__label" htmlFor={`star-${star.id}`} title={star.title}></label>
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="rate__progress">
                        <span className="rate__stars">{`${rating}/${STARS}`}</span>
                      </div>
                    </div>
                    <p className="rate__message">Нужно оценить товар</p>
                  </fieldset>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Ваше имя {snowflakeIcon}</span>
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Введите ваше имя"
                        required
                        value={userName}
                        onChange={handleNameChange}
                      />
                    </label>
                    <p className="custom-input__error" style={{opacity: userName && userName.length < MIN_COMMENT_LENGTH ? 1 : 0}}>Нужно указать имя</p>
                  </div>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Достоинства{snowflakeIcon}</span>
                      <input
                        type="text" name="user-plus"
                        placeholder="Основные преимущества товара"
                        onChange={handleAdvantageChange}
                        value={advantage}
                        required
                      />
                    </label>
                    <p className="custom-input__error" style={{opacity: advantage && advantage.length < MIN_COMMENT_LENGTH ? 1 : 0}}>Нужно указать достоинства</p>
                  </div>
                  <div className="custom-input form-review__item">
                    <label>
                      <span className="custom-input__label">Недостатки{snowflakeIcon}</span>
                      <input
                        type="text"
                        name="user-minus"
                        placeholder="Главные недостатки товара"
                        onChange={handleDisadvantageChange}
                        value={disadvantage}
                        required
                      />
                    </label>
                    <p className="custom-input__error" style={{opacity: disadvantage && disadvantage.length < MIN_COMMENT_LENGTH ? 1 : 0}}>Нужно указать недостатки</p>
                  </div>
                  <div className="custom-textarea form-review__item">
                    <label>
                      <span className="custom-textarea__label">Комментарий{snowflakeIcon}</span>
                      <textarea
                        name="user-comment"
                        minLength={MIN_COMMENT_LENGTH}
                        placeholder="Поделитесь своим опытом покупки"
                        onChange={handleReviewChange}
                        value={comment}
                      />
                    </label>
                    <div className="custom-textarea__error" style={{opacity: comment && comment.length < MIN_COMMENT_LENGTH ? 1 : 0}}>Нужно добавить комментарий</div>
                  </div>
                </div>
                <button
                  className="btn btn--purple form-review__btn"
                  type="submit"
                  disabled={
                    !rating ||
                  statusSubmit
                  || comment.length < MIN_COMMENT_LENGTH
                  || advantage.length < MIN_COMMENT_LENGTH
                  || disadvantage.length < MIN_COMMENT_LENGTH
                  || userName.length < MIN_COMMENT_LENGTH
                  }
                >
                Отправить отзыв
                </button>
              </form>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClick}>
              <svg width="10" height="10" aria-hidden="true"><use xlinkHref="#icon-close" /></svg>
            </button>
          </div>
        </FocusTrap>
      </div>
    </div>
  );
}

export default AddReviewModal;
