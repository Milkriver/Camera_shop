import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './error-page.css';

function ErrorPage(): JSX.Element {
  return (
    <div>
      <Header />
      <div className='screen-wrapper'>
        <h1>Упс... Что-то пошло не так...</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
