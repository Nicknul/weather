// components/WeatherHour.tsx
import React from 'react';

const WeatherHour = ({ data }: { data: any[] }) => {
  const hourlyData = data.filter((item) => item.category === 'TMP');

  return (
    <div>
      {hourlyData.map((hour, index) => (
        <div key={index} className="hourly">
          <div>{hour.fcstTime.slice(0, 2)}시</div>
          <div>{hour.fcstValue}℃</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherHour;
