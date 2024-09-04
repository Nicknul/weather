// components/WeatherHour.tsx
import React from 'react';

const WeatherHour = ({ hourlyData }: { hourlyData: any[] }) => {
  return (
    <div>
      {hourlyData.map((hour, index) => {
        const hourNumber = Number(hour.fcstTime.slice(0, 2));

        return (
          <div key={index} className="hourly">
            <div>{hourNumber}시</div>
            <div>{hour.fcstValue}℃</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherHour;
