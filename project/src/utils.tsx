const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const getReviewDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${day} ${month}`;
};
