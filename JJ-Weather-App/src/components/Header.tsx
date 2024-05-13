import { useState } from 'react';
import { GiSouthKorea } from 'react-icons/gi';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineMyLocation } from 'react-icons/md';
import { fetchCityWeatherData } from '../api/weather';

const Header = () => {
  const [term, setTerm] = useState('');

  const getCityWeatherData = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const data = await fetchCityWeatherData(term);
    console.log('확인', data);
  };

  return (
    <header className='flex justify-between items-center min-w-[300px] mx-auto py-4'>
      <div className='flex items-center'>
        <GiSouthKorea className='w-28 h-28' />
        <span className='text-3xl'>JJ-Weather</span>
      </div>

      <form className='flex' onSubmit={getCityWeatherData}>
        <div className='flex items-center w-[350px] h-16 px-4 gap-4 rounded-full bg-slate-50'>
          <IoSearchSharp className='bg-white w-8 h-8' />
          <input
            className='outline-none'
            type='text'
            placeholder='Search city...'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>

      <div className='flex items-center bg-purple-500 h-16 rounded-full p-4 gap-2'>
        <MdOutlineMyLocation className='w-8 h-8' />
        <button className='text-2xl'>current search</button>
      </div>
    </header>
  );
};

export default Header;
