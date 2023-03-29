import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { REVIEWS_QUANTITY } from '../../const';
import { useAppSelector } from '../../hooks';
import { fetchOfferReviewsAction } from '../../store/api-actions';
import { setOffer } from '../../store/offer-process/selectors';
import { setOfferReviews } from '../../store/review-process/selectors';
import { AppDispatch } from '../../types/state';
import AddReviewModalSuccess from '../add-review-modal-success/add-review-modal-success';
import AddReviewModal from '../add-review-modal/add-review-modal';
import ReviewItem from '../review-item/review-item';

function ReviewBlock(): JSX.Element {
  const product = useAppSelector(setOffer);
  const reviews = useAppSelector(setOfferReviews);
  let sortedReviews;
  if(reviews){
    sortedReviews = [...reviews].sort((comment1, comment2) => dayjs(comment2.createAt).diff(dayjs(comment1.createAt)));
  }
  const [reviewsShowList, setReviewShowList] = useState(REVIEWS_QUANTITY);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (product) {
      dispatch(fetchOfferReviewsAction(product.id));
    }
  }, [dispatch, product, reviews]);

  useEffect(() => {
    document.body.style.overflow = (isModalOpen || isSuccessModalOpen) ? 'hidden' : 'unset';
  }, [isModalOpen, isSuccessModalOpen]);

  const ecsPress = useCallback((event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      setIsModalOpen(false);
      setIsSuccessModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', ecsPress);
    return () => {
      document.removeEventListener('keydown', ecsPress);
    };
  }, [ecsPress]);


  const handleClick = () => setReviewShowList(reviewsShowList + REVIEWS_QUANTITY);
  const handleClickReview = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
  };
  const handleModalReviewClose = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  const handleSuccessModalClose = () => setIsSuccessModalOpen(false);
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button" onClick={handleClickReview}>Оставить свой отзыв</button>
          {isModalOpen && <AddReviewModal onClose={handleModalReviewClose} onClick={handleModalClose} />}
          {isSuccessModalOpen && <AddReviewModalSuccess onClose={handleSuccessModalClose} onClick={handleModalClose} />}
        </div>
        {reviews &&
        <>
          <ul className="review-block__list">
            {sortedReviews && sortedReviews.slice(0, reviewsShowList).map((review) => <ReviewItem review={review} key={review.id} />)}
          </ul>
          <div className="review-block__buttons">
            {reviews.length > reviewsShowList && <button className="btn btn--purple" type="button" onClick={handleClick}>Показать больше отзывов</button>}
          </div>
        </>}
      </div>
    </section>
  );
}

export default ReviewBlock;

