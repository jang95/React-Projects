import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { setCurrentData } from '../../store/slice/weatherDataSlice';
import { useAppDispatch } from '../../hooks';
import { CurrentData } from '../../types/currentData';
import {
  ForecastResponse,
  SearchByCityResponse,
} from '../../types/responseTypes';
import { setWeatherForecast } from '../../store/slice/weatherForecast';

export interface LoaderData {
  currentWeather: SearchByCityResponse;
  weatherForecast: ForecastResponse;
}

const Board = () => {
  const dispatch = useAppDispatch();
  const { currentWeather, weatherForecast } = useLoaderData() as LoaderData;

  useEffect(() => {
    if (currentWeather) {
      const { name, main, weather, wind, rain, snow, sys, dt, timezone } =
        currentWeather;

      const currentData: CurrentData = {
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

      dispatch(setCurrentData(currentData));
    }

    if (weatherForecast) {
      const { city, list } = weatherForecast;

      const forecastList = list.map((item) => ({
        dt: item.dt,
        main: item.main,
        weather: item.weather[0],
      }));

      const forecastData = {
        city,
        forecastList,
      };

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
