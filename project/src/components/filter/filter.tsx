import { useState } from 'react';
import { filterItem, FilterType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeMaxPrice, changeMinPrice } from '../../store/filter-process/filter-process';
import { setMaxPrice, setMinPrice } from '../../store/filter-process/selectors';
import { TFilterItem } from '../../types/utils';

function Filter(): JSX.Element {
  const minPrice = useAppSelector(setMinPrice);
  const maxPrice = useAppSelector(setMaxPrice);
  const [checkedFilterList, setCheckedFilterList] = useState(filterItem);
  const dispatch = useAppDispatch();

  const handleStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMinPrice(event.target.value));
  const handleEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMaxPrice(event.target.value));


  const renderFilterItem = (item: TFilterItem, type: string, handleCheck:() => void) => (
    type === item.type &&
    <div className="custom-checkbox catalog-filter__item" key={item.name}>
      <label>
        <input type={type === 'category' ? 'radio' : 'checkbox'} name={item.name} checked={item.checked} onChange={handleCheck}/>
        <span className="custom-checkbox__icon"/>
        <span className="custom-checkbox__label">{item.title}</span>
      </label>
    </div>
  );
  const updateCheckStatus = (index: number) => {
    setCheckedFilterList(
      checkedFilterList.map((filter, currentIndex) =>
        currentIndex === index ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };
  const onResetFilter = () => {
    setCheckedFilterList(filterItem);
    dispatch(changeMinPrice(''));
    dispatch(changeMaxPrice(''));
  };
  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от" value={Number(minPrice) >= 0 ? minPrice : 0} onChange={handleStartPrice}/>
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder="до" value={maxPrice} onChange={handleEndPrice}/>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          {filterItem.map((item, index) => renderFilterItem(item, FilterType.Category, () => updateCheckStatus(index)))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          {filterItem.map((item, index) => renderFilterItem(item, FilterType.Type, () => updateCheckStatus(index)))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {filterItem.map((item, index) => renderFilterItem(item, FilterType.Level, () => updateCheckStatus(index)))}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset" onClick={onResetFilter}>Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default Filter;
