import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { setPromoOffer } from '../../store/offer-process/selectors';

function Banner(): JSX.Element {
  const promoOffer = useAppSelector(setPromoOffer);
  return (
    <div className="banner">
      { promoOffer && <>
      <picture>
        <source type="image/webp" srcSet={`${promoOffer.previewImgWebp}, ${promoOffer.previewImgWebp2x}`}/>
        <img src={promoOffer.previewImg} srcSet={promoOffer.previewImg2x} width="1280" height="280" alt="баннер"/>
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{promoOffer.name}</span><span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" to={generatePath(AppRoute.Product, { id: String(promoOffer.id) })}>Подробнее</Link>
      </p>
      </>
      }
    </div>

  );
}

export default Banner;
