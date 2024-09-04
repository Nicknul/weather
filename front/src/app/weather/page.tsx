'use client';
import React, { useEffect, useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import WeatherDisplay from './components/WeatherDisplay';
import { getCurrentDate } from '../services/dateUtils';

const Weather = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  // useEffect를 사용해 현재 날짜를 설정하는 로직
  useEffect(() => {
    const formattedDate = getCurrentDate(); // 유틸리티 함수 호출
    setCurrentDate(formattedDate); // 현재 날짜 상태로 설정
  }, []); // 컴포넌트가 처음 로드될 때 한 번만 실행

  // 현재 날짜를 사용해 날씨 데이터 조회
  const weatherData = useWeather(currentDate);

  return (
    <div>
      <h1>날씨 정보</h1>
      {weatherData.length > 0 ? <WeatherDisplay weatherData={weatherData} /> : <div>데이터를 불러오는 중...</div>}
    </div>
  );
};

export default Weather;
