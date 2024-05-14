import { useEffect } from 'react';
import { useGeoLocation } from './hooks/useGeoLocation';
import { fetchWeatherData } from './api/weather';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import { CurrentData, WeatherData } from './types/currentData';
import { useAppDispatch } from './hooks';
import { setCurrentData } from './store/slice/weatherDataSlice';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10 * 6 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function App() {
  const { location, error } = useGeoLocation(geolocationOptions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        const data = await fetchWeatherData(location);
        setCityCurData(data);
      } else {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, error]);

  const setCityCurData = (data: WeatherData) => {
    const { name, main, weather, wind, rain, snow, sys } = data;

    const result: CurrentData = {
      name,
      main,
      weather: weather[0],
      wind,
      rain,
      snow,
      sys,
    };

    dispatch(setCurrentData(result));
  };

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header />
      <div className='flex flex-wrap justify-between gap-8 mx-4'>
        <div className='w-calc(100% - 270px)'>
          <Aside />
        </div>
        <div className='xl:w-[75%] lg:w-[70%] md:w-[60%] w-full'>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
