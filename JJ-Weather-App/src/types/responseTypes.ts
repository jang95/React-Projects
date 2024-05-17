// 날씨 예측 type 5day,3hours
export interface ForecastResponse {
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: Array<{
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
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
    pop: number;
    sys: { pod: string };
    visibility: number;
    weather: {
      description: string;
      icon: string;
      id: number;
      main: string;
    }[];
    wind: { deg: number; gust: number; speed: number };
  }>;
  message: number;
}

// 도시 검색 데이터 타입
export interface SearchByCityResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
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
  snow: {
    '1h': number;
  };
  rain: {
    '1h': number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
