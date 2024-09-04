'use client';
import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import WeatherDisplay from './components/WeatherDisplay';
import { useGeocoder } from '../hooks/useGeocoder';
import { useGoogleMapsLoader } from '../hooks/useGoogleMapsLoader'; // Google Maps 로드 훅 추가

const Weather = () => {
  const { weatherData, location, locationError, error, isLoading } = useWeatherData();
  const geocoderResult = useGeocoder(location?.lat ?? null, location?.lon ?? null);

  // Google Maps 스크립트 로드
  useGoogleMapsLoader(); // 스크립트 로드 훅 호출

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

      {/* 구글 지오코딩 결과 표시 */}
      {geocoderResult.address && (
        <div>
          <h2>현재 주소</h2>
          <p>{geocoderResult.address}</p>
        </div>
      )}
      {geocoderResult.error && <p>{geocoderResult.error}</p>}
    </div>
  );
};

export default Weather;
