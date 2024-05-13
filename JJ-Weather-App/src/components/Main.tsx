import { GiPaperWindmill } from 'react-icons/gi';
import { GoSun } from 'react-icons/go';
import { FaRegMoon } from 'react-icons/fa';
import { RiWaterPercentLine } from 'react-icons/ri';
import { TiWaves } from 'react-icons/ti';
import { IoEyeSharp } from 'react-icons/io5';
import { PiThermometerThin } from 'react-icons/pi';

const Main = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='min-w-[270px] bg-zinc-800 rounded-3xl'>
        <span className='p-8'>Todays Hightights</span>

        <div className='flex flex-wrap justify-evenly py-8 gap-2'>
          <div className='p-12 rounded-3xl bg-stone-950 w-4/5 md:w-[48%] mx-auto'>
            <div className='flex justify-between pb-8'>
              <span>Air Quality Index</span>
              <span>good</span>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <GiPaperWindmill className='w-24 h-24' />
              <div className='flex flex-col items-center '>
                <span>PM2.5</span>
                <span className='text-6xl'>15.3</span>
              </div>
              <div className='flex flex-col items-center '>
                <span>SO2</span>
                <span className='text-6xl'>3.76</span>
              </div>
              <div className='flex flex-col items-center '>
                <span>NO2</span>
                <span className='text-6xl'>8.14</span>
              </div>
              <div className='flex flex-col items-center '>
                <span>O3</span>
                <span className='text-6xl'>106</span>
              </div>
            </div>
          </div>

          {/* sunrise */}
          <div className='p-8 rounded-3xl bg-stone-950 w-4/5 md:w-[48%] mx-auto'>
            <div className='flex justify-between pb-8'>
              <span>Sunrise & Sunset</span>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8'>
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

        <div className='flex flex-wrap justify-evenly'>
          <div className='rounded-3xl p-4 bg-stone-950 w-[270px] md:w-1/2 lg:w-[22%] mb-4'>
            <span>Humidity</span>
            <div className='flex items-center gap-8'>
              <RiWaterPercentLine className='w-24 h-24' />
              <span className='text-6xl'>54%</span>
            </div>
          </div>
          <div className='rounded-3xl p-4 bg-stone-950 w-[270px] md:w-1/2 lg:w-[22%] mb-4'>
            <span>Pressure</span>
            <div className='flex items-center gap-8'>
              <TiWaves className='w-24 h-24' />
              <span className='text-6xl'>54%</span>
            </div>
          </div>
          <div className='rounded-3xl p-4 bg-stone-950 w-[270px] md:w-1/2 lg:w-[22%] mb-4'>
            <span>Visibility</span>
            <div className='flex items-center gap-8'>
              <IoEyeSharp className='w-24 h-24 color-white' />
              <span className='text-6xl'>54%</span>
            </div>
          </div>
          <div className='rounded-3xl p-4 bg-stone-950 w-[270px] md:w-1/2 lg:w-[22%] mb-4'>
            <span>Feels Like</span>
            <div className='flex items-center gap-8'>
              <PiThermometerThin className='w-24 h-24' />
              <span className='text-6xl'>54%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
