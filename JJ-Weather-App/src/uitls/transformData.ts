import { CurrentData } from '../types/currentData';
import { ForecastResponse, SearchByCityResponse } from '../types/responseTypes';

export const transformCurrentWeather = (
  currentWeather: SearchByCityResponse
): CurrentData => {
  const {
    name,
    main,
    weather,
    wind,
    rain,
    snow,
    sys,
    dt,
    timezone,
    visibility,
  } = currentWeather;

  return {
    name,
    main,
    weather: weather[0],
    wind,
    rain,
    snow,
    sys,
    dt,
    timezone,
    visibility,
  };
};

export const transformWeatherForecast = (weatherForecast: ForecastResponse) => {
  const { city, list } = weatherForecast;

  const forecastList = list.map((item) => ({
    dt: item.dt,
    main: item.main,
    weather: item.weather[0],
  }));

  return {
    city,
    forecastList,
  };
};
