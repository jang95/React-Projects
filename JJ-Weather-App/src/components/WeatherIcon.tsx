import { WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

import { MdWbSunny, MdWbCloudy, MdWifiTetheringError } from 'react-icons/md';

interface WeatherIconProps {
  weatherType: string | undefined;
  size: string;
}

const WeatherIcon = ({ weatherType, size }: WeatherIconProps) => {
  // 날씨 유형에 따라 아이콘을 반환합니다.
  switch (weatherType) {
    case 'Clear':
      return <MdWbSunny className={`${size} mt-4`} />;
    case 'Clouds':
      return <MdWbCloudy className={`${size} mt-4`} />;
    case 'Rain':
      return <WiRain className={`${size} mt-4`} />;
    case 'Snow':
      return <WiSnow className={`${size} mt-4`} />;
    case 'Thunderstorm':
      return <WiThunderstorm className={`${size} mt-4`} />;
    case 'Mist':
      return <WiFog className={`${size} mt-4`} />;
    default:
      return <MdWifiTetheringError className={`${size} mt-4`} />;
  }
};

export default WeatherIcon;
