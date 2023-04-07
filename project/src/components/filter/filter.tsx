/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { filterCategoryItem, filterLevelItem, FilterType, filterTypeItem } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCategory, changeLevel, changeMaxPrice, changeMinPrice, changeType, initialState } from '../../store/filter-process/filter-process';
import { setCategory, setLevel, setMaxPrice, setMinPrice, setType } from '../../store/filter-process/selectors';
import { TFilterItem } from '../../types/utils';

function Filter(): JSX.Element {
  const minPrice = useAppSelector(setMinPrice);
  const maxPrice = useAppSelector(setMaxPrice);
  const category = useAppSelector(setCategory);
  const typeList = useAppSelector(setType);
  const levelList = useAppSelector(setLevel);
  const [checkedCategoryList, setCheckedFilterList] = useState(filterCategoryItem);
  const dispatch = useAppDispatch();

  const handleStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMinPrice(event.target.value));
  const handleEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMaxPrice(event.target.value));
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeCategory(category === event.target.name ? '' : event.target.name));
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    dispatch(changeType({...typeList, [key as keyof typeof typeList]: !typeList[key as keyof typeof typeList]}));
  };

  const handleLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    dispatch(changeLevel({...levelList, [key as keyof typeof levelList]: !levelList[key as keyof typeof levelList]}));
  };

  const renderFilterItem = (item: TFilterItem, type: string,
    handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
  ) => (
    type === item.type &&
    <div className="custom-checkbox catalog-filter__item" key={item.name}>
      <label>
        <input
          type='checkbox'
          name={item.name}
          checked={type === FilterType.Category ? item.name === category : typeList[item.name as keyof typeof typeList]}
          onChange={handleCheck}
          disabled={category === 'videocamera' ? item.name === 'film' || item.name === 'snapshot' : false}
        />
        <span className="custom-checkbox__icon"/>
        <span className="custom-checkbox__label">{item.title}</span>
      </label>
    </div>
  );
  const onResetFilter = () => {
    setCheckedFilterList(filterCategoryItem);
    dispatch(changeMinPrice(''));
    dispatch(changeMaxPrice(''));
    dispatch(changeCategory(''));
    dispatch(changeType(initialState.type));
    dispatch(changeLevel(initialState.level));
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
          {checkedCategoryList.map((item) => renderFilterItem(item, FilterType.Category, handleCategory))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          {filterTypeItem.map((item) => renderFilterItem(item, FilterType.Type, handleType))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {filterLevelItem.map((item) => renderFilterItem(item, FilterType.Level, handleLevel))}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset" onClick={onResetFilter}>Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default Filter;
