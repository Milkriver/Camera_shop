import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActivePaginationPage } from '../../store/data-process/data-process';
import { setActivePaginationPage } from '../../store/data-process/selectors';

type IProps = {
  pages: number[];
}

function Pagination({ pages }: IProps): JSX.Element {
  const activePage = useAppSelector(setActivePaginationPage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handlePageClick = (item: number) => {
    dispatch(changeActivePaginationPage(item));
    navigate(`#${item}`);
  };
  const renderPaginationItem = (item: number) => (
    <li style={{ cursor: 'pointer' }} className="pagination__item" key={item} onClick={() => handlePageClick(item)}>
      <div className={`pagination__link ${item === activePage ? 'pagination__link--active' : ''}`}>{item}</div>
    </li>
  );
  const renderPaginationNextItem = (item: number, index: number) => {
    if (item === activePage) {
      return (
        <li style={{ cursor: 'pointer' }} className='pagination__item' key={`${item}${index}`} onClick={() => handlePageClick(item + 1)}>
          <div className="pagination__link pagination__link--text">Далее</div>
        </li>
      );
    }
  };
  const renderPaginationPreviousItem = (item: number, index: number) => {
    if (item === (activePage - 1)) {
      return (
        <li style={{ cursor: 'pointer' }} className='pagination__item' key={`${item}${index}`} onClick={() => handlePageClick(item)}>
          <div className="pagination__link pagination__link--text">Назад</div>
        </li>
      );
    }
  };
  return (
    <ul className="pagination__list">
      {(activePage !== pages[0]) && pages.map((page, index) => renderPaginationPreviousItem(page, index))}
      {pages.map((page) => renderPaginationItem(page))}
      {(activePage !== pages.length) && pages.map((page, index) => renderPaginationNextItem(page, index))}
    </ul>

  );
}

export default Pagination;

