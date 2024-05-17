export interface CurrentData {
  name: string;
  main: MainData;
  weather: weatherData;
  wind: WindData;
  rain: PrecipitationData | undefined;
  snow: PrecipitationData | undefined;
  sys: SysData;
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
