import React, { useEffect, useState } from 'react';
import { orderTypes, sortTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import { TSortType } from '../../types/utils';

function SortForm(): JSX.Element {
  const [sortType, setSortType] = useState('');
  const [orderType, setOrderType] = useState('asc');
  const handleSortClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortType(event.target.value);
  };
  const handleSortOrderClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderType(event.target.value);
  };
  const dispatch = useAppDispatch();
  const params = new URLSearchParams();
  if(sortType){
    params.append('_sort', sortType);
  }
  params.append('_order', orderType);
  const sortParams = params.toString();

  useEffect(()=>{
    dispatch(fetchOffersAction(sortParams));
  },[dispatch, sortParams]);

  const renderSortButton = (option: TSortType) => (
    <div className={`catalog-sort__btn-${option.type}`} key={option.name}>
      <input
        type="radio"
        id={option.name}
        name="sort"
        value={option.name}
        checked={sortType === option.name}
        onChange={handleSortClick}
      />
      <label htmlFor={option.name}>{option.label}</label>
    </div>);

  const renderOrderButton = (option: TSortType) => (
    <div className={`catalog-sort__btn catalog-sort__btn--${option.type}`} key={option.name}>
      <input
        type="radio"
        id={option.type}
        name="sort-icon"
        value={option.name}
        checked={orderType === option.name}
        aria-label={option.label}
        onChange={handleSortOrderClick}
      />
      <label htmlFor={option.type}>
        <svg width="16" height="14" aria-hidden="true">
          <use xlinkHref="#icon-sort"></use>
        </svg>
      </label>
    </div>
  );

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            {sortTypes.map((element) => renderSortButton(element))}
          </div>
          <div className="catalog-sort__order">
            {orderTypes.map((element) => renderOrderButton(element))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SortForm;
