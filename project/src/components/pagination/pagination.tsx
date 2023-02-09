function Pagination(): JSX.Element{
  const activePage = 1;
  const pages = [1,2,3];
  const renderPaginationItem = (item: number) =><li className={`pagination__item ${item === activePage ? 'pagination__link--active' : ''}`}><a className="pagination__link" href={item.toString()}>{item}</a></li>;
  const renderPaginationNextItem = (item: number, index: number) =>{
    if(index === (activePage - 1)){
      <li className='pagination__item'>
        <a className="pagination__link pagination__link--text" href={item.toString()}>Далее</a>
      </li>;
    }
  };
  const paginationList = pages.map((page) => renderPaginationItem(page));
  const paginationNextItem = pages.map((page, index) => renderPaginationNextItem(page, index));
  return (
    <>
      {paginationList}
      {paginationNextItem}
    </>

  );
}

export default Pagination;

