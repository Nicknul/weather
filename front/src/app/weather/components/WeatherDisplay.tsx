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

  // 시간별 기온 데이터 필터링 (TMP)
  const hourlyData = weatherData.filter((item) => item.category === 'TMP');

  return (
    <div>
      {tmxData.map((tmx, index) => {
        const tmn = tmnData[index];

        return (
          <div key={index}>
            <WeatherDay data={[tmx, tmn]} /> {/* 날짜별 최고/최저 기온 표시 */}
          </div>
        );
      })}
      <WeatherHour hourlyData={hourlyData} /> {/* 시간별 기온 데이터 표시 */}
    </div>
  );
};

export default WeatherDisplay;
