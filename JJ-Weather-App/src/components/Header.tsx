import { GiSouthKorea } from 'react-icons/gi';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <header className='flex justify-between items-center mx-auto py-4 md:mx-2'>
      <Link to={'/'} className='flex items-center text-3xl max-sm:hidden'>
        <GiSouthKorea className='w-28 h-28' />
        JJ-Weather
      </Link>

      <SearchInput />

      <div className='flex items-center bg-purple-500 h-16 rounded-full p-4 gap-2'>
        <MdOutlineMyLocation className='w-8 h-8' />
        <button className='text-2xl max-md:hidden'>current search</button>
      </div>
    </header>
  );
};

export default Header;
