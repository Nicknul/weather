// components/WeatherHour.tsx
import React from 'react';

const WeatherHour = ({ data }: { data: any[] }) => {
  const hourlyData = data.filter((item) => item.category === 'TMP');

  return (
    <div>
      {hourlyData.map((hour, index) => {
        // fcstTime의 앞 2자리를 가져와서 숫자로 변환
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
