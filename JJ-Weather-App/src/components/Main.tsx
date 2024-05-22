import { GiPaperWindmill } from 'react-icons/gi';
import { GoSun } from 'react-icons/go';
import { FaRegMoon } from 'react-icons/fa';
import { RiWaterPercentLine } from 'react-icons/ri';
import { TiWaves } from 'react-icons/ti';
import { IoEyeSharp } from 'react-icons/io5';
import { PiThermometerThin } from 'react-icons/pi';
import { useAppSelector } from '../hooks';

interface AirQuality {
  color: string;
  title: string;
}

const Main = () => {
  const currentData = useAppSelector((state) => state.currentData);
  const airPollution = useAppSelector((state) => state.airPollution);

  const airQualityMap: { [key: number]: AirQuality } = {
    1: { color: 'bg-blue-500', title: '매우 좋음' },
    2: { color: 'bg-green-600', title: '좋음' },
    3: { color: 'bg-yellow-600', title: '보통' },
    4: { color: 'bg-orange-700', title: '나쁨' },
    5: { color: 'bg-red-700', title: '매우 나쁨' },
  };

  const airState = airPollution.list[0].main.aqi;
  const { color, title } = airQualityMap[airState] || {
    color: 'bg-gray-500',
    title: '매우 좋음',
  };

  return (
    <div className='flex flex-col justify-center items-center w-full bg-zinc-800 rounded-3xl ml-2'>
      <span className='p-8 text-4xl font-bold'>Todays Hightights</span>

      <div className='flex flex-wrap w-full justify-between py-8 gap-2'>
        <div className='p-8 rounded-3xl w-[95%] bg-stone-950 mx-auto '>
          <div className='flex justify-between pb-8'>
            <span>Air Quality Index</span>
            <div
              className={`p-2 text-center rounded-lg font-semibold ${color}`}
            >
              {title}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-evenly'>
            <div className='flex'>
              <GiPaperWindmill className='w-20 h-20' />
            </div>
            <div className='flex flex-col items-center '>
              <span>PM2.5</span>
              <span className='text-5xl'>
                {airPollution.list[0].components.pm2_5}
              </span>
            </div>
            <div className='flex flex-col items-center '>
              <span>SO2</span>
              <span className='text-5xl'>
                {airPollution.list[0].components.so2}
              </span>
            </div>
            <div className='flex flex-col items-center '>
              <span>NO2</span>
              <span className='text-5xl'>
                {airPollution.list[0].components.no2}
              </span>
            </div>
            <div className='flex flex-col items-center '>
              <span>O3</span>
              <span className='text-5xl'>
                {airPollution.list[0].components.o3}
              </span>
            </div>
          </div>
        </div>

        {/* sunrise */}
        <div className='p-8 rounded-3xl bg-stone-950 w-[95%] mx-auto'>
          <div className='flex justify-between pb-8'>
            <span>Sunrise & Sunset</span>
          </div>
          <div className='flex flex-col justify-evenly items-center gap-8 md:flex-row md:gap-4'>
            <div className='flex gap-8'>
              <GoSun className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <span>Sunrise</span>
                <span className='text-6xl md:text-4xl'>6:41AM</span>
              </div>
            </div>
            <div className='flex gap-8'>
              <FaRegMoon className='w-24 h-24' />
              <div className='flex flex-col items-center'>
                <span>Sunset</span>
                <span className='text-6xl md:text-4xl'>6:41PM</span>
              </div>
            </div>
          </div>
        </div>
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
