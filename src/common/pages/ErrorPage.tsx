import { useRouteError } from 'react-router-dom';
import TopNav from '../../features/snippets/components/TopNav';
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <TopNav />
      <div className='text-center text-3xl font-semibol'>404 Page Not Found.</div>
      <div className='text-center text-3xl font-semibol'>
        Click here to head back to the Homepage.
      </div>
    </div>
  );
};

export default ErrorPage;
