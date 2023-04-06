/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { filterCategoryItem, filterLevelItem, FilterType, filterTypeItem } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCategory, changeMaxPrice, changeMinPrice, changeType } from '../../store/filter-process/filter-process';
import { setCategory, setMaxPrice, setMinPrice, setType } from '../../store/filter-process/selectors';
import { TFilterItem } from '../../types/utils';

function Filter(): JSX.Element {
  const minPrice = useAppSelector(setMinPrice);
  const maxPrice = useAppSelector(setMaxPrice);
  const category = useAppSelector(setCategory);
  const typeList = useAppSelector(setType);
  const [checkedCategoryList, setCheckedFilterList] = useState(filterCategoryItem);
  const [checkedTypeList, setCheckedTypeList] = useState(filterTypeItem);
  const [checkedLevelList, setCheckedLevelList] = useState(filterLevelItem);
  const dispatch = useAppDispatch();

  const handleStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMinPrice(event.target.value));
  const handleEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeMaxPrice(event.target.value));
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeCategory(event.target.name));
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(changeType({...typeList}));
  const renderFilterItem = (item: TFilterItem, type: string,
    handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
  ) => (
    type === item.type &&
    <div className="custom-checkbox catalog-filter__item" key={item.name}>
      <label>
        <input
          type='checkbox'
          name={item.name}
          checked={type === FilterType.Category ? item.name === category : typeList.collection}
          onChange={handleCheck}
          disabled={category === 'videocamera' ? item.name === 'film' || item.name === 'snapshot' : false}
        />
        <span className="custom-checkbox__icon"/>
        <span className="custom-checkbox__label">{item.title}</span>
      </label>
    </div>
  );
  // const updateCheckStatus = (index: number) => {
  //   setCheckedFilterList(
  //     checkedFilterList.map((filter, currentIndex) =>
  //       currentIndex === index ? { ...filter, checked: !filter.checked } : filter
  //     )
  //   );
  // };
  const onResetFilter = () => {
    setCheckedFilterList(filterCategoryItem);
    dispatch(changeMinPrice(''));
    dispatch(changeMaxPrice(''));
    dispatch(changeCategory(''));
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
          {checkedTypeList.map((item, index) => renderFilterItem(item, FilterType.Type, handleType))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {/* {checkedLevelList.map((item, index) => renderFilterItem(item, FilterType.Level, () => updateCheckStatus(index, checkedLevelList)))} */}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset" onClick={onResetFilter}>Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default Filter;
