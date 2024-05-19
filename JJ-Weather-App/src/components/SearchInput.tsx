import React, { useRef } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { fetch5DaysWeatherData, fetchWeatherData } from '../api/weather';
import { useAppDispatch } from '../hooks';
import { setCurrentData } from '../store/slice/weatherDataSlice';
import { useQueryClient } from '@tanstack/react-query';
import { setWeatherForecast } from '../store/slice/weatherForecast';
import { ForecastResponse, SearchByCityResponse } from '../types/responseTypes';
import {
  transformCurrentWeather,
  transformWeatherForecast,
} from '../uitls/transformData';

const SearchInput = () => {
  const termRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const citySearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = termRef.current?.value;
    // 입력된 검색어가 있을 때만 refetch 실행
    if (term) {
      const { data: curWeather } = await queryClient.ensureQueryData({
        queryKey: ['weather', term],
        queryFn: async () => await fetchWeatherData(term),
      });

      const { data: weatherForecast } = await queryClient.ensureQueryData({
        queryKey: ['forecast', term],
        queryFn: async () => await fetch5DaysWeatherData(term),
      });

      if (curWeather && weatherForecast) {
        setWeatherData(curWeather, weatherForecast);
      }
      termRef.current.value = '';
    }
  };

  const setWeatherData = (
    curWeather: SearchByCityResponse,
    weatherForecast: ForecastResponse
  ) => {
    const searchWeather = transformCurrentWeather(curWeather);
    const searchForecast = transformWeatherForecast(weatherForecast);
    dispatch(setCurrentData(searchWeather));
    dispatch(setWeatherForecast(searchForecast));
  };

  return (
    <form className='flex' onSubmit={citySearch}>
      <div className='flex items-center h-16 px-4 gap-4 rounded-full bg-slate-50 text-black text-3xl font-bold'>
        <IoSearchSharp className='w-8 h-8' color='black' />
        <input
          className='outline-none'
          type='text'
          placeholder='Search city...'
          ref={termRef}
        />
      </div>
    </form>
  );
};

export default SearchInput;
