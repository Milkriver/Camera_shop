import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { REVIEWS_QUANTITY } from '../../const';
import { useAppSelector } from '../../hooks';
import { changeModalState } from '../../store/actions';
import { fetchOfferReviewsAction } from '../../store/api-actions';
import { AppDispatch } from '../../types/state';
import ReviewItem from '../review-item/review-item';

function ReviewBlock(): JSX.Element {
  const product = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.offerReviews);
  const [reviewsShowList, setReviewShowList] = useState(REVIEWS_QUANTITY);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
    dispatch(fetchOfferReviewsAction(product.id));
  },[dispatch, product.id]);
  const handleClick = () => setReviewShowList(reviewsShowList + REVIEWS_QUANTITY);
  const handleClickReview = () => {
    changeModalState(true);
  };
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button" onClick={handleClickReview}>Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviews.slice(0, reviewsShowList).map((review) => <ReviewItem review={review} key={review.id}/>)}
        </ul>
        <div className="review-block__buttons">
          {reviews.length > reviewsShowList && <button className="btn btn--purple" type="button" onClick={handleClick}>Показать больше отзывов</button>}
        </div>
      </div>
    </section>
  );
}

export default ReviewBlock;

