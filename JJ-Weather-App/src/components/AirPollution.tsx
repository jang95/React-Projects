import { useAppSelector } from '../hooks';
import { GiPaperWindmill } from 'react-icons/gi';

interface AirQuality {
  color: string;
  title: string;
}

const airQualityMap: { [key: number]: AirQuality } = {
  1: { color: 'bg-blue-500', title: '매우 좋음' },
  2: { color: 'bg-green-600', title: '좋음' },
  3: { color: 'bg-yellow-600', title: '보통' },
  4: { color: 'bg-orange-700', title: '나쁨' },
  5: { color: 'bg-red-700', title: '매우 나쁨' },
};

const AirPollution = () => {
  const airPollution = useAppSelector((state) => state.airPollution);

  const airState = airPollution.list[0].main.aqi;
  const { color, title } = airQualityMap[airState] || {
    color: 'bg-gray-500',
    title: '매우 좋음',
  };

  return (
    <div className='p-8 rounded-3xl w-full bg-stone-950 mx-8'>
      <div className='flex justify-between pb-8'>
        <span>Air Quality Index</span>
        <div className={`p-2 text-center rounded-lg font-semibold ${color}`}>
          {title}
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className='flex'>
          <GiPaperWindmill className='w-20 h-20' />
        </div>
        <div className='flex flex-col items-center '>
          <span>PM2.5</span>
          <span className='text-4xl'>
            {airPollution.list[0].components.pm2_5}
          </span>
        </div>
        <div className='flex flex-col items-center '>
          <span>SO2</span>
          <span className='text-4xl'>
            {airPollution.list[0].components.so2}
          </span>
        </div>
        <div className='flex flex-col items-center '>
          <span>NO2</span>
          <span className='text-4xl'>
            {airPollution.list[0].components.no2}
          </span>
        </div>
        <div className='flex flex-col items-center '>
          <span>O3</span>
          <span className='text-4xl'>{airPollution.list[0].components.o3}</span>
        </div>
      </div>
    </div>
  );
};

export default AirPollution;
