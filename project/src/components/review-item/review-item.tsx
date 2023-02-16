import { STARS } from '../../const';
import { IReview } from '../../types/offers';
import { getReviewDate, renderEmptyStar, renderFullStar } from '../../utils';

type IProps = {
    review: IReview;
};

function ReviewItem({review}: IProps): JSX.Element {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={review.createAt}>{getReviewDate(review.createAt)}</time>
      </div>
      <div className="rate review-card__rate">
        {Array(review.rating).fill(renderFullStar())}
        {Array(STARS - review.rating).fill(renderEmptyStar())}
        <p className="visually-hidden">Оценка: {review.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewItem;


