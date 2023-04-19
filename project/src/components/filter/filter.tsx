import { useEffect, useRef, useState } from 'react';
import { filterCategoryItems, filterLevelItems, FilterType, filterTypeItems, TIMEOUT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCategory, changeLevel, changeMaxPrice, changeMinPrice, changeType, initialState } from '../../store/filter-process/filter-process';
import { setCategory, setLevel, setType } from '../../store/filter-process/selectors';
import { setOffers } from '../../store/offer-process/selectors';
import { TFilterItem } from '../../types/utils';

function Filter(): JSX.Element {
  const products = useAppSelector(setOffers);
  const filterProducts = products ? [...products].sort((product1, product2) => product1.price - product2.price) : [];
  const minProductPrice = filterProducts.length > 0 ? filterProducts[0].price : 0;
  const maxProductPrice = filterProducts.length > 0 ? filterProducts[filterProducts.length - 1].price : 999999999;
  const category = useAppSelector(setCategory);
  const typeList = useAppSelector(setType);
  const levelList = useAppSelector(setLevel);
  const [checkedCategoryList, setCheckedFilterList] = useState(filterCategoryItems);
  const [minFilterPrice, setMinFilterPrice] = useState<number | undefined>();
  const [maxFilterPrice, setMaxFilterPrice] = useState<number | undefined>();
  const dispatch = useAppDispatch();
  const startTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const endTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setMinFilterPrice(undefined);
      dispatch(changeMinPrice(''));
      return;
    }

    const customValue = Number(event.target.value);

    if (isNaN(customValue)) {
      return;
    }

    setMinFilterPrice(customValue);

    if (startTimer.current) {
      clearTimeout(startTimer.current);
    }

    startTimer.current = setTimeout(() => {
      const isRangeCorrect = maxFilterPrice === undefined || customValue < maxFilterPrice;
      const isLimitCorrect = minProductPrice < customValue;
      const isPositiveNumber = customValue >= 0;
      const fixedPrice = isRangeCorrect && isLimitCorrect && isPositiveNumber
        ? customValue
        : minProductPrice;
      setMinFilterPrice(fixedPrice);
      dispatch(changeMinPrice(fixedPrice.toString()));
      startTimer.current = undefined;
    }, TIMEOUT);
  };

  const handleEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setMaxFilterPrice(undefined);
      dispatch(changeMaxPrice(''));
      return;
    }

    const customValue = Number(event.target.value);

    if (isNaN(customValue)) {
      return;
    }

    setMaxFilterPrice(customValue);

    if (endTimer.current) {
      clearTimeout(endTimer.current);
    }

    endTimer.current = setTimeout(() => {
      const isRangeCorrect = minFilterPrice === undefined || customValue >= minFilterPrice;
      const isLimitCorrect = maxProductPrice > customValue;
      const isPositiveNumber = customValue >= 0;
      const fixedPrice = isRangeCorrect && isLimitCorrect && isPositiveNumber
        ? customValue
        : maxProductPrice;
      setMaxFilterPrice(fixedPrice);
      dispatch(changeMaxPrice(fixedPrice.toString()));
      endTimer.current = undefined;
    }, TIMEOUT);
  };

  useEffect(() => () => {
    startTimer.current && clearTimeout(startTimer.current);
    endTimer.current && clearTimeout(endTimer.current);
  }, []);

  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'videocamera') {
      const updatedList = { ...typeList};
      updatedList.film = false;
      updatedList.snapshot = false;
      dispatch(changeType(updatedList));
    }

    dispatch(changeCategory(category === event.target.name ? '' : event.target.name));
  };
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    dispatch(changeType({ ...typeList, [key as keyof typeof typeList]: !typeList[key as keyof typeof typeList] }));
  };

  const handleLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    dispatch(changeLevel({ ...levelList, [key as keyof typeof levelList]: !levelList[key as keyof typeof levelList] }));
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
        <span className="custom-checkbox__icon" />
        <span className="custom-checkbox__label">{item.title}</span>
      </label>
    </div>
  );
  const onResetFilter = () => {
    setCheckedFilterList(filterCategoryItems);
    setMinFilterPrice(undefined);
    startTimer.current && clearTimeout(startTimer.current);
    setMaxFilterPrice(undefined);
    endTimer.current && clearTimeout(endTimer.current);
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
                <input type="number" name="price" placeholder={minProductPrice.toString()} value={minFilterPrice || ''} onChange={handleStartPrice} />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder={maxProductPrice.toString()} value={maxFilterPrice || ''} onChange={handleEndPrice} />
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
          {filterTypeItems.map((item) => renderFilterItem(item, FilterType.Type, handleType))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {filterLevelItems.map((item) => renderFilterItem(item, FilterType.Level, handleLevel))}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset" onClick={onResetFilter}>Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default Filter;
