import {
  AirPollutionResponse,
  ForecastResponse,
  SearchByCityResponse,
} from '../../types/responseTypes';
import {
  fetch5DaysWeatherData,
  fetchAirPollution,
  fetchWeatherData,
} from '../../api/weather';
import { getCurrentLocation } from '../../uitls/getLocation';

export const boardLoader = async (): Promise<{
  currentWeather: SearchByCityResponse;
  weatherForecast: ForecastResponse;
  airPollution: AirPollutionResponse;
}> => {
  try {
    // 현재 경도, 위도 가져오기
    const position = await getCurrentLocation();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Promise.all 통한 HTTP 요청 병렬 실행
    const [currentWeather, weatherForecast, airPollution] = await Promise.all([
      fetchWeatherData({ lat, lon }),
      fetch5DaysWeatherData({ lat, lon }),
      fetchAirPollution({ lat, lon }),
    ]);

    return { currentWeather, weatherForecast, airPollution };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    throw new Error('Unable to fetch geolocation');
  }
};
