// components/WeatherDay.tsx
import React from 'react';
import { getCurrentDate, getDayOfWeek } from '../../services/dateUtils';

const WeatherDay = ({ data }: { data: any[] }) => {
  const tmx = data[0]; // 최고 기온 데이터
  const tmn = data[1]; // 최저 기온 데이터

  const currentDate = getCurrentDate();
  const apiDate = tmx.fcstDate;

  const isToday = apiDate === currentDate;
  const displayDay = isToday ? '오늘' : getDayOfWeek(apiDate);

  return (
    <div>
      <div>{displayDay}</div>
      <div>최고 기온: {tmx?.fcstValue}℃</div>
      <div>최저 기온: {tmn?.fcstValue}℃</div>
    </div>
  );
};

export default WeatherDay;
