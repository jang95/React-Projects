import { useCallback, useEffect } from 'react';
import { useGeoLocation } from './hooks/useGeoLocation';
import { fetchWeatherData, fetch5DaysWeatherData } from './api/weather';
import Header from './components/Header';
// import Aside from './components/Aside';
// import Main from './components/Main';
import { useAppDispatch } from './hooks';
import { setCurrentData } from './store/slice/weatherDataSlice';

import { useQuery } from '@tanstack/react-query';
import { ForecastResponse, SearchByCityResponse } from './types/responseTypes';
import { setWeatherForecast } from './store/slice/weatherForecast';

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CurrentData } from './types/currentData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
]);

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10 * 6 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function App() {
  const { location } = useGeoLocation(geolocationOptions);
  const dispatch = useAppDispatch();

  const { data: curWeather } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location,
  });

  const { data: weatherForecast } = useQuery({
    queryKey: ['forecast', location],
    queryFn: () => fetch5DaysWeatherData(location),
  });

  const setForecastData = useCallback(
    (data: ForecastResponse) => {
      const { city, list } = data;

      const forecastList = list.map((item) => ({
        dt: item.dt,
        main: item.main,
        weather: item.weather[0],
      }));

      const result = {
        city,
        forecastList,
      };
      dispatch(setWeatherForecast(result));
    },
    [dispatch]
  );

  const setCityCurData = useCallback(
    (data: SearchByCityResponse) => {
      const { name, main, weather, wind, rain, snow, sys, dt, timezone } = data;

      const result: CurrentData = {
        name,
        main,
        weather: weather[0],
        wind,
        rain,
        snow,
        sys,
        dt,
        timezone,
      };

      dispatch(setCurrentData(result));
    },
    [dispatch]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (curWeather) {
        setCityCurData(curWeather);
      }

      if (weatherForecast) {
        setForecastData(weatherForecast);
      }
    };

    fetchData();
  }, [location, curWeather, weatherForecast, setCityCurData, setForecastData]);

  return (
    // <div className='max-w-[1280px] mx-auto'>
    //   <Header />
    //   <div className='flex flex-wrap justify-between gap-8 mx-4'>
    //     <div className='w-calc(100% - 300px) mx-auto'>
    //       <Aside />
    //     </div>
    //     <div className='xl:w-[75%] lg:w-[70%] md:w-[60%] w-full'>
    //       <Main />
    //     </div>
    //   </div>
    // </div>
    <div className='container mx-auto px-12'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
