import { useAppSelector } from '../hooks';
import { getDate } from '../uitls/uitl';
import WeatherIcon from './WeatherIcon';

const Forecast = () => {
  const { city, forecastList } = useAppSelector(
    (state) => state.weatherForecast
  );

  const days = forecastList.filter((_, index) => (index + 1) % 8 === 0);

  return (
    <div className=' bg-zinc-800 rounded-3xl p-8'>
      <span className='text-3xl mb-8'>5 days Forecast</span>
      {days.map((item) => {
        return (
          <div key={item.dt} className='flex justify-between'>
            <div className='flex items-center gap-8'>
              <WeatherIcon weatherType={item.weather.main} size={'w-8 h-8'} />
              <span>{Math.floor(item.main.temp)}°c</span>
              <span>{getDate(item.dt, city.timezone)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
