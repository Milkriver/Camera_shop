import { useState } from 'react';
import BasketItem from '../../components/basket-item/basket-item';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCouponAction } from '../../store/api-actions';
import { positionsSelector, sumSelector, discountSelector } from '../../store/order-process/selectors';

function BasketPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [coupon, setCoupon] = useState('');

  const basketList = useAppSelector(positionsSelector);
  const totalPrice = useAppSelector(sumSelector);
  const discountPercent = useAppSelector(discountSelector);
  const discountSum = discountPercent * totalPrice / 100;
  const payment = totalPrice - discountSum;

  const handleCouponEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const couponValue = event.target.value;
    if(couponValue.includes(' ')) {
      return;
    }
    setCoupon(couponValue);
  };

  const handleCouponApply = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(coupon === '') {
      return;
    }

    dispatch(addCouponAction({coupon}));
  };

  return(
    <>
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs name='Корзина' />
          <section className="basket">
            <div className="container">
              <h1 className="title title--h2">Корзина</h1>
              <ul className="basket__list">
                {
                  basketList && basketList.map((product) => <BasketItem product={product} key={product.id}/>)
                }
              </ul>
              <div className="basket__summary">
                <div className="basket__promo">
                  <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
                  <div className="basket-form">
                    <form action="#" onSubmit={handleCouponApply}>
                      <div className="custom-input">
                        <label><span className="custom-input__label">Промокод</span>
                          <input type="text" name="promo" placeholder="Введите промокод" onChange={handleCouponEdit} value={coupon}/>
                        </label>
                        <p className="custom-input__error">Промокод неверный</p>
                        <p className="custom-input__success">Промокод принят!</p>
                      </div>
                      <button className="btn" type="submit">Применить
                      </button>
                    </form>
                  </div>
                </div>
                <div className="basket__summary-order">
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Всего:</span>
                    <span className="basket__summary-value">{totalPrice} ₽</span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text">Скидка:</span>
                    <span className="basket__summary-value basket__summary-value--bonus">{discountSum} ₽</span>
                  </p>
                  <p className="basket__summary-item">
                    <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
                    <span className="basket__summary-value basket__summary-value--total">{payment} ₽</span>
                  </p>
                  <button className="btn btn--purple" type="submit">Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default BasketPage;
