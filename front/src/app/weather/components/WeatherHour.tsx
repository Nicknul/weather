// components/WeatherHour.tsx
import React from 'react';
import { getDayOfWeek } from '@/app/utils/dateUtils';

const WeatherHour = ({ hourlyData }: { hourlyData: any[] }) => {
  // 날짜별로 데이터를 그룹화하여 표시
  const groupedData: { [key: string]: any[] } = hourlyData.reduce((acc: any, item: any) => {
    if (!acc[item.fcstDate]) {
      acc[item.fcstDate] = [];
    }
    acc[item.fcstDate].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedData).map((date) => (
        <div key={date}>
          {/* 날짜 표시 (오늘은 "오늘", 나머지는 요일로 표시) */}
          <h3>
            {getDayOfWeek(date)} ({date})
          </h3>

          {/* 해당 날짜의 시간별 기온 표시 */}
          {groupedData[date].map((hour, index) => {
            const hourNumber = Number(hour.fcstTime.slice(0, 2)); // 시간을 숫자로 변환
            return (
              <div key={index} className="hourly">
                <div>{hourNumber}시</div>
                <div>{hour.fcstValue}℃</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WeatherHour;
