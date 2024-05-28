import { RiWaterPercentLine } from 'react-icons/ri';
import { TiWaves } from 'react-icons/ti';
import { IoEyeSharp } from 'react-icons/io5';
import { PiThermometerThin } from 'react-icons/pi';
import { useAppSelector } from '../hooks';
import AirPollution from './AirPollution';
import SunriseSunSet from './SunriseSunSet';

const Main = () => {
  const currentData = useAppSelector((state) => state.currentData);

  return (
    <div className='flex flex-col justify-center items-center bg-zinc-800 rounded-3xl mx-2'>
      <span className='p-8 text-4xl font-bold'>Todays Hightights</span>

      <div className='flex flex-wrap w-full justify-between py-8 gap-2'>
        <AirPollution />
        <SunriseSunSet />
      </div>

      <div className='flex flex-wrap justify-evenly w-full'>
        <div className='rounded-3xl p-4 bg-stone-950 w-[90%] md:w-[45%] mb-4'>
          <span>Humidity</span>
          <div className='flex items-center justify-around'>
            <RiWaterPercentLine className='w-24 h-24' />
            <span className='text-4xl'>{currentData.main.humidity}%</span>
          </div>
        </div>
        <div className='rounded-3xl p-4 bg-stone-950 w-[90%] md:w-[45%] mb-4'>
          <span>Pressure</span>
          <div className='flex items-center justify-around'>
            <TiWaves className='w-24 h-24' />
            <span className='text-4xl'>{currentData.main.pressure}hPa</span>
          </div>
        </div>
        <div className='rounded-3xl p-4 bg-stone-950 w-[90%] md:w-[45%] mb-4'>
          <span>Visibility</span>
          <div className='flex items-center justify-around'>
            <IoEyeSharp className='w-24 h-24 color-white' />
            <span className='text-4xl'>{currentData.visibility / 1000}km</span>
          </div>
        </div>
        <div className='rounded-3xl p-4 bg-stone-950 w-[90%] md:w-[45%] mb-4'>
          <span>Feels Like</span>
          <div className='flex items-center justify-around'>
            <PiThermometerThin className='w-24 h-24' />
            <span className='text-4xl'>
              {Math.floor(currentData.main.feels_like)}°c
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
