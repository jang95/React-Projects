export interface setForecastType {
  city: CityInfoType;
  forecastList: ForecastListType[];
}

export interface CityInfoType {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ForecastListType {
  dt: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
}
