import { getTime } from '../uitls/uitl';
import { GoSun } from 'react-icons/go';
import { FaRegMoon } from 'react-icons/fa';
import { useAppSelector } from '../hooks';

const SunriseSunSet = () => {
  const currentData = useAppSelector((state) => state.currentData);
  return (
    <div className='p-8 rounded-3xl w-full bg-stone-950 mx-8'>
      <div className='flex justify-between pb-8'>
        <span>Sunrise & Sunset</span>
      </div>
      <div className='flex flex-col justify-evenly items-center gap-8 md:flex-row md:gap-4'>
        <div className='flex gap-8'>
          <GoSun className='w-20 h-20' />
          <div className='flex flex-col items-center'>
            <span>Sunrise</span>
            <span className='text-6xl md:text-4xl'>
              {getTime(currentData.sys.sunrise, currentData.timezone)}
            </span>
          </div>
        </div>
        <div className='flex gap-8'>
          <FaRegMoon className='w-20 h-20' />
          <div className='flex flex-col items-center'>
            <span>Sunset</span>
            <span className='text-6xl md:text-4xl'>
              {getTime(currentData.sys.sunset, currentData.timezone)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunSet;
