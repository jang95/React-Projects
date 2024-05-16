import { useAppSelector } from '../hooks';
import { getDay, getWeekDay } from '../uitls/uitl';
import WeatherIcon from './WeatherIcon';

const Forecast = () => {
  const { city, forecastList } = useAppSelector(
    (state) => state.weatherForecast
  );

  const days = forecastList.filter((_, index) => (index + 1) % 8 === 0);

  return (
    <div className='w-[270px] bg-zinc-800 rounded-3xl p-8'>
      <span className='text-3xl mb-8'>5 days Forecast</span>
      {days.map((item) => {
        return (
          <div key={item.dt} className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <WeatherIcon weatherType={item.weather.main} size={'w-8 h-8'} />
              <span>{Math.floor(item.main.temp)}°c</span>
            </div>
            <span>{getWeekDay(item.dt, city.timezone)}</span>
            <span>{getDay(item.dt, city.timezone)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
