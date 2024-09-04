// components/WeatherDay.tsx
import React from 'react';
import { getCurrentDate, getDayOfWeek } from '../../services/dateUtils';

const WeatherDay = ({ data }: { data: any[] }) => {
  const tmx = data.find((item) => item.category === 'TMX');
  const tmn = data.find((item) => item.category === 'TMN');

  // 현재 날짜 가져오기
  const currentDate = getCurrentDate();

  // API에서 받은 날짜 (YYYYMMDD 형식)
  const apiDate = tmx ? tmx.fcstDate : ''; // tmx의 fcstDate 사용 (존재하면)

  // 날짜 비교하여 오늘인지 여부 확인
  const isToday = apiDate === currentDate;

  // 요일 계산 (오늘이 아닌 경우)
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
