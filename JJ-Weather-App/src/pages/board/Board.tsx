import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { setCurrentData } from '../../store/slice/weatherDataSlice';
import { useAppDispatch } from '../../hooks';
import {
  ForecastResponse,
  SearchByCityResponse,
} from '../../types/responseTypes';
import { setWeatherForecast } from '../../store/slice/weatherForecast';
import {
  transformCurrentWeather,
  transformWeatherForecast,
} from '../../uitls/transformData';

export interface LoaderData {
  currentWeather: SearchByCityResponse;
  weatherForecast: ForecastResponse;
}

const Board = () => {
  const dispatch = useAppDispatch();
  const { currentWeather, weatherForecast } = useLoaderData() as LoaderData;

  useEffect(() => {
    if (currentWeather) {
      const currentData = transformCurrentWeather(currentWeather);
      dispatch(setCurrentData(currentData));
    }

    if (weatherForecast) {
      const forecastData = transformWeatherForecast(weatherForecast);
      dispatch(setWeatherForecast(forecastData));
    }
  }, [currentWeather, weatherForecast, dispatch]);

  return (
    <div className='flex flex-wrap'>
      <div className='xl:w-[30%] lg:w-[35%] md:w-[45%]'>
        <Aside />
      </div>
      <div className='xl:w-[70%] lg:w-[65%] md:w-[55%]'>
        <Main />
      </div>
    </div>
  );
};

export default Board;
