import { TParams } from './types/utils';

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const getReviewDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${day} ${month}`;
};

export const getParams = (params: TParams) => {
  const { sortType, orderType, minPrice, maxPrice, category, typeList, levelList } = params;
  const filterParams = new URLSearchParams();
  if(sortType){
    filterParams.append('_sort', sortType);
  }
  if(orderType){
    filterParams.append('_order', orderType);
  }
  if(minPrice){
    filterParams.append('price_gte', minPrice);
  }
  if(maxPrice){
    filterParams.append('price_lte', maxPrice);
  }
  if(category){
    filterParams.append('category', category === 'videocamera' ? 'Видеокамера' : 'Фотоаппарат');
  }
  if(typeList?.digital){
    filterParams.append('type', 'Цифровая');
  }
  if(typeList?.film){
    filterParams.append('type', 'Плёночная');
  }
  if(typeList?.snapshot){
    filterParams.append('type', 'Моментальная');
  }
  if(typeList?.collection){
    filterParams.append('type', 'Коллекционная');
  }
  if(levelList?.zero){
    filterParams.append('level', 'Нулевой');
  }
  if(levelList?.nonprofessional){
    filterParams.append('level', 'Любительский');
  }
  if(levelList?.professional){
    filterParams.append('level', 'Профессиональный');
  }
  return filterParams.toString();
};
