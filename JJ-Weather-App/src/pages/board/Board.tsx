import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { setCurrentData } from '../../store/slice/weatherDataSlice';
import { useAppDispatch } from '../../hooks';
import {
  AirPollutionResponse,
  ForecastResponse,
  SearchByCityResponse,
} from '../../types/responseTypes';
import { setWeatherForecast } from '../../store/slice/weatherForecast';
import {
  transformCurrentWeather,
  transformWeatherForecast,
} from '../../uitls/transformData';
import { setAirPollution } from '../../store/slice/airPollutionSlice';

export interface LoaderData {
  currentWeather: SearchByCityResponse;
  weatherForecast: ForecastResponse;
  airPollution: AirPollutionResponse;
}

const Board = () => {
  const dispatch = useAppDispatch();
  const { currentWeather, weatherForecast, airPollution } =
    useLoaderData() as LoaderData;

  useEffect(() => {
    if (currentWeather) {
      const currentData = transformCurrentWeather(currentWeather);
      dispatch(setCurrentData(currentData));
    }

    if (weatherForecast) {
      const forecastData = transformWeatherForecast(weatherForecast);
      dispatch(setWeatherForecast(forecastData));
    }

    if (airPollution) {
      dispatch(setAirPollution(airPollution));
    }
  }, [currentWeather, weatherForecast, airPollution, dispatch]);

  return (
    <div className='flex flex-col md:flex-row justify-center'>
      <Aside />
      <Main />
    </div>
  );
};

export default Board;
