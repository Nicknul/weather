// components/WeatherDisplay.tsx
import React from 'react';
import WeatherDay from './WeatherDay';
import WeatherHour from './WeatherHour';
import { getCurrentDate } from '../../services/dateUtils';

const WeatherDisplay = ({ weatherData }: { weatherData: any[] }) => {
  const currentDate = getCurrentDate();

  // 최고/최저 기온 데이터 필터링
  const tmxData = weatherData.filter((item) => item.category === 'TMX');
  const tmnData = weatherData.filter((item) => item.category === 'TMN');

  // 오늘의 시간별 기온 데이터 필터링
  const hourlyData = weatherData.filter((item) => item.category === 'TMP' && item.fcstDate === currentDate);

  return (
    <div>
      {tmxData.map((tmx, index) => {
        const tmn = tmnData[index];
        const apiDate = tmx.fcstDate;

        // 날짜가 오늘인지 확인
        const isToday = apiDate === currentDate;

        return (
          <div key={index}>
            <WeatherDay data={[tmx, tmn]} /> {/* 최고/최저 기온 표시 */}
            {isToday && <WeatherHour hourlyData={hourlyData} />} {/* 오늘의 시간별 기온 표시 */}
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDisplay;
