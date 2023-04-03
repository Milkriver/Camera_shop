import React, { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchedOffersAction } from '../../store/api-actions';
import { setSearchedOffers } from '../../store/offer-process/selectors';

function SearchForm(): JSX.Element {
  const searchedProducts = useAppSelector(setSearchedOffers);
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value);
  const handleClick = () => setSearchValue('');
  const dispatch = useAppDispatch();
  const params = new URLSearchParams();
  if(searchValue){
    params.append('name_like', searchValue);
  }
  const nameParams = params.toString();

  useEffect(()=>{
    if(searchValue){
      dispatch(fetchSearchedOffersAction(nameParams));
    }
  },[dispatch, nameParams, searchValue]);


  return (
    <div className={`form-search ${searchValue && searchedProducts && searchedProducts.length !== 0 ? 'list-opened' : ''}`}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input className="form-search__input" type="text" value={searchValue} autoComplete="off" placeholder="Поиск по сайту" onChange={handleChange}/>
        </label>
        <ul className="form-search__select-list">
          {searchedProducts && searchedProducts.map((element) => (
            <li className="form-search__select-item" key={element.name}>
              <Link to={generatePath(AppRoute.Product, { id: String(element.id) })} onClick={handleClick} tabIndex={0}>{element.name}</Link>
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


