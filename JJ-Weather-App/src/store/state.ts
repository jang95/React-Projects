// redux weatherForecastSlice에서 사용할 초기 데이터 구조

export const ForecastState = {
  city: {
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
    id: 0,
    name: '',
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
  },
  forecastList: [
    {
      dt: 0,
      main: {
        feels_like: 0,
        grnd_level: 0,
        humidity: 0,
        pressure: 0,
        sea_level: 0,
        temp: 0,
        temp_kf: 0,
        temp_max: 0,
        temp_min: 0,
      },
      weather: {
        description: '',
        icon: '',
        id: 0,
        main: '',
      },
    },
  ],
};
