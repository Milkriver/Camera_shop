import React from 'react';
import { orderTypes, SortName, sortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOrderType, changeSortType } from '../../store/filter-process/filter-process';
import { setOrderType, setSortType } from '../../store/filter-process/selectors';
import { TSortType } from '../../types/utils';

function SortForm(): JSX.Element {
  const sortType = useAppSelector(setSortType);
  const orderType = useAppSelector(setOrderType);
  const handleSortClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSortType(event.target.value));
    if(!orderType){
      dispatch(changeOrderType(SortName.ASC));
    }
  };
  const handleSortOrderClick = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeOrderType(event.target.value));
  const dispatch = useAppDispatch();

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
