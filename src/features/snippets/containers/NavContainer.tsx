import { ReactNode } from 'react';
import TopNav from '../components/TopNav';

interface Props {
  children: ReactNode;
}

const NavContainer = ({ children }: Props) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center gap-4'>
      <TopNav />
      {children}
    </div>
  );
};

export default NavContainer;
