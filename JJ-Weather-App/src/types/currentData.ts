export interface CurrentData {
  name: string;
  main: Partial<MainData>;
  weather: Partial<weatherData>;
  wind: Partial<WindData>;
  rain?: Partial<PrecipitationData> | undefined;
  snow?: Partial<PrecipitationData> | undefined;
  sys: Partial<SysData>;
  dt: number;
  timezone: number;
}

export interface MainData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface weatherData {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WindData {
  deg: number;
  gust: number;
  speed: number;
}

export interface PrecipitationData {
  '1h': number;
}

export interface SysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  rain: Partial<PrecipitationData>;
  snow: Partial<PrecipitationData>;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
