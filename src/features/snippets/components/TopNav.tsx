import { Navbar } from 'flowbite-react';

const TopNav = () => {
  return (
    <Navbar fluid rounded className='w-full flex'>
      <Navbar.Brand className='self-center'>
        <img alt='SnippetsBox' className='mr-3 h-6 sm:h-16' src='snippets.png' />
        <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
          SnippetsBox
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default TopNav;
