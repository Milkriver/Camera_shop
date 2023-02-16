import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { fetchOfferReviewsAction } from '../../store/api-actions';
import { AppDispatch } from '../../types/state';
import ReviewItem from '../review-item/review-item';

function ReviewBlock(): JSX.Element {
  const product = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.offerReviews);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
    dispatch(fetchOfferReviewsAction(product.id));
  },[]);
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;

