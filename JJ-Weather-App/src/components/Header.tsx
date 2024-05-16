import { useState } from 'react';
import { GiSouthKorea } from 'react-icons/gi';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineMyLocation } from 'react-icons/md';
import { fetchWeatherData } from '../api/weather';
import { useAppDispatch } from '../hooks';
import { setCurrentData } from '../store/slice/weatherDataSlice';
import { CurrentData, WeatherData } from '../types/currentData';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useAppDispatch();

  const citySearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetchWeatherData(term);

    setCityCurData(data);
  };

  const setCityCurData = (data: WeatherData) => {
    const { name, main, weather, wind, rain, snow, sys, dt, timezone } = data;

    const result: CurrentData = {
      name,
      main,
      weather: weather[0],
      wind,
      rain,
      snow,
      sys,
      dt,
      timezone,
    };
    dispatch(setCurrentData(result));
  };

  return (
    <header className='flex justify-between items-center min-w-[300px] mx-auto py-4 md:mx-2'>
      <div className='flex items-center'>
        <GiSouthKorea className='w-28 h-28' />
        <span className='text-3xl'>JJ-Weather</span>
      </div>

      <form className='flex' onSubmit={citySearch}>
        <div className='flex items-center w-[100%] h-16 px-4 gap-4 rounded-full bg-slate-50 text-black text-3xl font-bold'>
          <IoSearchSharp className='w-8 h-8' color='black' />
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
