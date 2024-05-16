import { WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

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
      return <WiRain />;
    case 'Snow':
      return <WiSnow />;
    case 'Thunderstorm':
      return <WiThunderstorm />;
    default:
      return <MdWifiTetheringError />;
  }
};

export default WeatherIcon;
