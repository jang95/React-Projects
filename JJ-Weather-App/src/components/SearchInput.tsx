import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { fetchWeatherData } from '../api/weather';
import { useAppDispatch } from '../hooks';
import { CurrentData } from '../types/currentData';
import { setCurrentData } from '../store/slice/weatherDataSlice';
import { SearchByCityResponse } from '../types/responseTypes';

const SearchInput = () => {
  const [term, setTerm] = useState('');
  const dispatch = useAppDispatch();

  const citySearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: SearchByCityResponse = await fetchWeatherData(term);

    setCityCurData(data);
    setTerm('');
  };

  const setCityCurData = (data: SearchByCityResponse) => {
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
    <form className='flex' onSubmit={citySearch}>
      <div className='flex items-center  h-16 px-4 gap-4 rounded-full bg-slate-50 text-black text-3xl font-bold'>
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
  );
};

export default SearchInput;
