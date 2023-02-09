function Pagination(): JSX.Element{
  const activePage = 1;
  const pages = [1,2,3];
  const renderPaginationItem = (item: number) =><li className="pagination__item" key={item}><a className={`pagination__link ${item === activePage ? 'pagination__link--active' : ''}`} href={item.toString()}>{item}</a></li>;
  const renderPaginationNextItem = (item: number, index: number) =>{
    if(item === activePage){
      return(
        <li className='pagination__item' key={`${item}${index}`}>
          <a className="pagination__link pagination__link--text" href={(item + 1).toString()}>Далее</a>
        </li>
      );
    }
  };
  const paginationList = pages.map((page) => renderPaginationItem(page));
  const paginationNextItem = pages.map((page, index) => renderPaginationNextItem(page, index));
  return (
    <ul className="pagination__list">
      {paginationList}
      {paginationNextItem}
    </ul>

  );
}

export default Pagination;

