import axios from 'axios';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

// 통신에 오류가 있을 경우
const basicLocation = {
  latitude: 37.5665,
  longitude: 126.978,
};

interface GeoLocation {
  latitude: number;
  longitude: number;
}

export const fetchWeatherData = async (
  param: string | GeoLocation | undefined
) => {
  let url = '';

  if (typeof param === 'string') {
    // 도시 이름이 인수로 제공된 경우
    url = `${BASE_URL}?q=${param}&appid=${API_KEY}&units=metric`;
  } else if (!param) {
    // param이 undefined인 경우 기본 위치 사용
    url = `${BASE_URL}?lat=${basicLocation.latitude}&lon=${basicLocation.longitude}&appid=${API_KEY}&units=metric`;
  } else {
    // 위도와 경도가 포함된 GeoLocation 객체가 인수로 제공된 경우
    const { latitude, longitude } = param;
    url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  }

  try {
    const response = await axios.get(url);
    console.log('현재 날씨 정보', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { data } = error.response;
      console.log('현재 지역 날씨 에러', data);
    }
    throw error;
  }
};

export const fetch5DaysWeatherData = async (
  param: string | GeoLocation | undefined
) => {
  let url = '';

  if (typeof param === 'string') {
    url = `${FORECAST_URL}?q=${param}&appid=${API_KEY}&units=metric`;
  } else if (!param) {
    url = `${FORECAST_URL}?lat=${basicLocation.latitude}&lon=${basicLocation.longitude}&appid=${API_KEY}&units=metric`;
  } else {
    const { latitude, longitude } = param;
    url = `${FORECAST_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  }

  try {
    const response = await axios.get(url);

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
