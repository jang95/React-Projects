import {
  ForecastResponse,
  SearchByCityResponse,
} from '../../types/responseTypes';
import { fetch5DaysWeatherData, fetchWeatherData } from '../../api/weather';
import { getCurrentLocation } from '../../uitls/getLocation';

export const boardLoader = async (): Promise<{
  currentWeather: SearchByCityResponse;
  weatherForecast: ForecastResponse;
}> => {
  try {
    // 현재 경도, 위도 가져오기
    const position = await getCurrentLocation();
    const { latitude, longitude } = position.coords;

    // Promise.all 통한 HTTP 요청 병렬 실행
    const [currentWeather, weatherForecast] = await Promise.all([
      fetchWeatherData({ latitude, longitude }),
      fetch5DaysWeatherData({ latitude, longitude }),
    ]);

    return { currentWeather, weatherForecast };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    throw new Error('Unable to fetch geolocation');
  }
};
