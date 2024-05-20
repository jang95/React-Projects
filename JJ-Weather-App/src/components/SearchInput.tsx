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

    if (term) {
      try {
        const curWeather = await queryClient.ensureQueryData({
          queryKey: ['weather', term],
          queryFn: () => fetchWeatherData(term),
        });

        const weatherForecast = await queryClient.ensureQueryData({
          queryKey: ['forecast', term],
          queryFn: () => fetch5DaysWeatherData(term),
        });

        if (curWeather && weatherForecast) {
          setWeatherData(curWeather, weatherForecast);
          console.log('setWeatherData', curWeather);
        }
      } catch (error) {
        console.error('날씨 데이터를 가져오는 중 오류 발생:', error);
        alert('날씨 데이터를 가져오는 중 오류 발생!');
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
