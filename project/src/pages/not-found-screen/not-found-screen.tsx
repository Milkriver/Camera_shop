import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      <Header />
      <div className='screen-wrapper'>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
