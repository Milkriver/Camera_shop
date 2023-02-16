export const renderFullStar = () => <svg width="17" height="16" aria-hidden="true"><use xlinkHref="img/sprite_auto.svg#icon-full-star"></use></svg>;
export const renderEmptyStar = () => <svg width="17" height="16" aria-hidden="true"><use xlinkHref="img/sprite_auto.svg#icon-star"></use></svg>;

const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const getReviewDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const monthIndex = date.getMonth();
  const month = monthes[monthIndex];
  const day = date.getDate();
  return `${day} ${month}`;
};
