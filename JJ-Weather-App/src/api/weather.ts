import axios from 'axios';
import { GeoLocation } from '../hooks/useGeoLocation';

const API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
export const fetchWeatherData = async (location: GeoLocation) => {
  const { latitude, longitude } = location;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    console.log('현재 날씨 정보', response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error;
      if (axiosError.response) {
        const { data } = axiosError.response;
        console.log('현재 지역 날씨 에러', data);
      }
    }
  }
};

export const fetch5DaysWeatherData = async (location: GeoLocation) => {
  const { latitude, longitude } = location;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    console.log('5일/3시간 데이터', response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error;
      if (axiosError.response) {
        const { data } = axiosError.response;
        console.log('5일/ 3시간 날씨 에러 확인', data);
      }
    }
  }
};
