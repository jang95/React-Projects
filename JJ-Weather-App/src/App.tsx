import { useEffect } from 'react';
import { useGeoLocation } from './hooks/useGeoLocation';
import { fetchWeatherData } from './api/weather';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10 * 6 * 10,
  maximumAge: 1000 * 3600 * 24,
};

function App() {
  const { location, error } = useGeoLocation(geolocationOptions);

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    } else {
      console.log(error);
    }
  }, [location, error]);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <Header />
      <div className='flex justify-between flex-wrap'>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
