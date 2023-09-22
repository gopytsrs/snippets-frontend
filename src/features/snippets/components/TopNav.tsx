import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Link to='/'>
      <Navbar fluid rounded className='w-full flex'>
        <Navbar.Brand className='self-center'>
          <img alt='SnippetsBox' className='mr-3 h-6 sm:h-16' src='/snippets.png' />
          <span className='self-center whitespace-nowrap text-4xl font-semibold dark:text-white'>
            SnippetsBox
          </span>
        </Navbar.Brand>
      </Navbar>
    </Link>
  );
};

export default TopNav;
