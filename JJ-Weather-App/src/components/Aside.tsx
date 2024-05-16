import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';
import { getDate } from '../uitls/uitl';
import WeatherIcon from './WeatherIcon';
import Forecast from './Forecast';

const Aside = () => {
  const curWeatherData = useAppSelector(
    (state: RootState) => state.currentData
  );

  const date = getDate(curWeatherData.dt, curWeatherData.timezone);
  return (
    <div className='flex flex-col gap-4 md: ml-2'>
      <div className='bg-zinc-800 rounded-3xl p-8'>
        <span className='text-4xl'>now</span>
        <div className='flex items-center justify-center gap-8 py-4'>
          <span className='text-6xl py-4'>{curWeatherData.main.temp}°c</span>
          <WeatherIcon
            weatherType={curWeatherData.weather.main}
            size={'w-24 h-24'}
          />
        </div>
        <span>{curWeatherData.weather.main}</span>
        <div className='border-b-white border-b-[1px] my-4' />
        <div className='flex items-center gap-2'>
          <CiCalendar className='w-12 h-12' />
          {date}
        </div>
        <div className='flex items-center gap-2'>
          <CiLocationOn className='w-12 h-12' />
          {curWeatherData.name}
        </div>
      </div>
      <Forecast />
    </div>
  );
};

export default Aside;
