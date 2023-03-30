import { categoryFilter, levelFilter, typeFilter } from '../../const';
import { TFilterItem } from '../../types/utils';

function Filter(): JSX.Element {

  const renderFilterItem = (item: TFilterItem) => (
    <div className="custom-checkbox catalog-filter__item" key={item.name}>
      <label>
        <input type="checkbox" name={item.name} checked={item.checked} />
        <span className="custom-checkbox__icon"/>
        <span className="custom-checkbox__label">{item.title}</span>
      </label>
    </div>
  );
  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от"/>
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder="до"/>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          {categoryFilter.map((item) => renderFilterItem(item))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          {typeFilter.map((item) => renderFilterItem(item))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {levelFilter.map((item) => renderFilterItem(item))}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default Filter;
