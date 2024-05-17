import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
