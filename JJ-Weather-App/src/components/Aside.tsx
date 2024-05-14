import { CiCalendar, CiLocationOn } from 'react-icons/ci';
import { MdWbSunny } from 'react-icons/md';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

const Aside = () => {
  const curWeatherData = useAppSelector(
    (state: RootState) => state.currentData
  );
  return (
    <div className='flex flex-col gap-4 md: ml-2'>
      <div className='w-[270px] bg-zinc-800 rounded-3xl p-8'>
        <span className='text-4xl'>now</span>
        <div className='flex items-center gap-8 py-4'>
          <span className='text-6xl py-4'>{curWeatherData.main.temp}°c</span>
          <MdWbSunny className='w-24 h-24 mt-4' />
        </div>
        <span>{curWeatherData.weather.main}</span>
        <div className='border-b-white border-b-[1px] my-4' />
        <div className='flex items-center gap-2'>
          <CiCalendar className='w-12 h-12' />
          날짜
        </div>
        <div className='flex items-center gap-2'>
          <CiLocationOn className='w-12 h-12' />
          {curWeatherData.name}
        </div>
      </div>

      <span className='pl-2'>5 days Forecast</span>

      <div className='w-[270px] bg-zinc-800 rounded-3xl p-8'>
        <div className='flex justify-between my-4'>
          <div className='flex items-center gap-4'>
            <MdWbSunny className='w-8 h-8' />
            <span>19°c</span>
          </div>
          <span>달</span>
          <span>요일</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
