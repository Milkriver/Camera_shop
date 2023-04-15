import React, { useCallback, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute, Key } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchedOffersAction } from '../../store/api-actions';
import { setSearchedOffers } from '../../store/offer-process/selectors';

function SearchForm(): JSX.Element {
  const searchedProducts = useAppSelector(setSearchedOffers);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [focusedItem, setFocusedItem] = useState(0);
  const [ isFocused, setIsFocused ] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value);
  const handleClick = () => {
    if (searchedProducts) {
      navigate(generatePath(AppRoute.Product, { id: String(searchedProducts[focusedItem].id) }));
      setSearchValue('');
    }
  };
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

  const activeItem = document.querySelectorAll('#search-list-item')[focusedItem];
  const keyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === Key.ENTER && searchedProducts) {
      navigate(generatePath(AppRoute.Product, { id: String(searchedProducts[focusedItem].id) }));
    }
    if(event.key === Key.UP){
      if(searchedProducts){
        setIsFocused(true);
        setFocusedItem(focusedItem > 0 ? focusedItem - 1 : 0);
      }
    }
    if(event.key === Key.DOWN){
      if(searchedProducts){
        setIsFocused(true);
        setFocusedItem(focusedItem < searchedProducts.length - 1 ? focusedItem + 1 : searchedProducts.length - 1);
      }
    }
  }, [navigate, searchedProducts, focusedItem]);

  useEffect(() => {
    if(activeItem && isFocused){
      (activeItem as HTMLInputElement).focus();
    }
  },[activeItem, isFocused]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

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
            <li className="form-search__select-item" key={element.name} id='search-list-item' tabIndex={0}>
              <div onClick={handleClick}>{element.name}</div>
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


