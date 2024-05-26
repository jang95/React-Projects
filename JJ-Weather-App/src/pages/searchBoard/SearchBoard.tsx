import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../../hooks';
import {
  fetchWeatherData,
  fetch5DaysWeatherData,
  fetchAirPollution,
} from '../../api/weather';
import { setAirPollution } from '../../store/slice/airPollutionSlice';
import { setCurrentData } from '../../store/slice/weatherDataSlice';
import { setWeatherForecast } from '../../store/slice/weatherForecast';
import {
  SearchByCityResponse,
  ForecastResponse,
  AirPollutionResponse,
} from '../../types/responseTypes';
import {
  transformCurrentWeather,
  transformWeatherForecast,
} from '../../uitls/transformData';
import Aside from '../../components/Aside';
import Main from '../../components/Main';

const SearchBoard = () => {
  const { city } = useParams<{ city: string }>();
  const dispatch = useAppDispatch();

  const setWeatherData = useCallback(
    (
      curWeather: SearchByCityResponse,
      weatherForecast: ForecastResponse,
      airPollution: AirPollutionResponse
    ) => {
      const searchWeather = transformCurrentWeather(curWeather);
      const searchForecast = transformWeatherForecast(weatherForecast);
      dispatch(setCurrentData(searchWeather));
      dispatch(setWeatherForecast(searchForecast));
      dispatch(setAirPollution(airPollution));
    },
    [dispatch]
  );

  const {
    data: curWeather,
    error: weatherError,
    isLoading: weatherLoading,
  } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeatherData(city),
    enabled: Boolean(city),
  });

  const {
    data: weatherForecast,
    error: forecastError,
    isLoading: forecastLoading,
  } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => fetch5DaysWeatherData(city),
    enabled: Boolean(city && curWeather),
  });

  const {
    data: airPollution,
    error: airPollutionError,
    isLoading: airPollutionLoading,
  } = useQuery({
    queryKey: ['airPollution', curWeather?.coord],
    queryFn: () => fetchAirPollution(curWeather?.coord),
    enabled: Boolean(curWeather?.coord),
  });

  useEffect(() => {
    if (curWeather && weatherForecast && airPollution) {
      setWeatherData(curWeather, weatherForecast, airPollution);
    }
  }, [curWeather, weatherForecast, airPollution, setWeatherData]);

  useEffect(() => {
    if (weatherError || forecastError || airPollutionError) {
      console.error(
        '날씨 데이터를 가져오는 중 오류 발생:',
        weatherError || forecastError || airPollutionError
      );
      alert('날씨 데이터를 가져오는 중 오류 발생!');
    }
  }, [weatherError, forecastError, airPollutionError]);

  if (weatherLoading || forecastLoading || airPollutionLoading) {
    return <div>Loading...</div>;
  }

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

export default SearchBoard;
