// components/WeatherDay.tsx
import React from 'react';

const WeatherDay = ({ data }: { data: any[] }) => {
  const tmx = data.find((item) => item.category === 'TMX');
  const tmn = data.find((item) => item.category === 'TMN');

  return (
    <div>
      <div>최고 기온: {tmx?.fcstValue}℃</div>
      <div>최저 기온: {tmn?.fcstValue}℃</div>
    </div>
  );
};

export default WeatherDay;
