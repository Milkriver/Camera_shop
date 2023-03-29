import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { setOffers } from '../../store/offer-process/selectors';

function SearchForm(): JSX.Element {
  const products = useAppSelector(setOffers);
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value);
  const handleClick = () => setSearchValue('');
  if(!products){
    return <li className="form-search__select-item" tabIndex={0}></li>;
  }
  const filteredProducts = products.filter((element) => element.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className={`form-search ${searchValue ? 'list-opened' : ''}`}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input className="form-search__input" type="text" value={searchValue} autoComplete="off" placeholder="Поиск по сайту" onChange={handleChange}/>
        </label>
        <ul className="form-search__select-list">
          {filteredProducts && filteredProducts.map((element) => (
            <li className="form-search__select-item" tabIndex={0} key={element.name}>
              <Link to={generatePath(AppRoute.Product, { id: String(element.id) })}>{element.name}</Link>
            </li>
          ))}
        </ul>
      </form>
      <button className="form-search__reset" type="reset" onClick={handleClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>


  );
}

export default SearchForm;


