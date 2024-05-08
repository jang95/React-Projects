import { useEffect } from 'react';
import { useGeoLocation } from './hooks/useGeoLocation';
import { fetchWeatherData } from './api/weather';

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

  return <></>;
}

export default App;
