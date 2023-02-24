import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActivePaginationPage } from '../../store/actions';

type IProps = {
  pages: number[];
}

function Pagination({pages}: IProps): JSX.Element{
  const activePage = useAppSelector((state) => state.activePaginationPage);
  const dispatch = useAppDispatch();
  const handlePageClick = (item: number) => dispatch(changeActivePaginationPage(item));
  const renderPaginationItem = (item: number) =>(
    <li style={{cursor: 'pointer'}} className="pagination__item" key={item} onClick={() => handlePageClick(item)}>
      <div className={`pagination__link ${item === activePage ? 'pagination__link--active' : ''}`}>{item}</div>
    </li>
  );
  const renderPaginationNextItem = (item: number, index: number) =>{
    if(item === activePage){
      return(
        <li style={{cursor: 'pointer'}} className='pagination__item' key={`${item}${index}`} onClick={() => handlePageClick(item + 1)}>
          <div className="pagination__link pagination__link--text">Далее</div>
        </li>
      );
    }
  };
  const paginationList = pages.map((page) => renderPaginationItem(page));
  const paginationNextItem = pages.map((page, index) => renderPaginationNextItem(page, index));
  return (
    <ul className="pagination__list">
      {paginationList}
      {(activePage !== pages.length) && paginationNextItem}
    </ul>

  );
}

export default Pagination;

