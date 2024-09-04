// weather/Weather.tsx
'use client';
import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherDisplay from './components/WeatherDisplay';

const Weather = () => {
  const { weatherData, locationError, error, isLoading } = useWeatherData();

  return (
    <div>
      <h1>날씨 정보</h1>
      {locationError && <p>{locationError}</p>}
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>위치 정보를 불러오는 중...</p>
      ) : (
        weatherData.length > 0 && <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default Weather;
