// weather/Weather.tsx
'use client';
import React from 'react';
import { useWeather } from '../hooks/useWeather';
import WeatherDisplay from './components/WeatherDisplay';

const Weather = () => {
  window.addEventListener('load', () => {
    const now = new Date();
    console.log(now);
  });
  const weatherData = useWeather('20240904'); // 현재 날짜 예시

  return (
    <div>
      <h1>날씨 정보</h1>
      {weatherData.length > 0 ? <WeatherDisplay weatherData={weatherData} /> : <div>데이터를 불러오는 중...</div>}
    </div>
  );
};

export default Weather;
