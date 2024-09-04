// hooks/useWeatherData.ts
import { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';
import { convertToGrid } from '../utils/convertToGrid';
import { useWeather } from './useWeather';
import { getCurrentDate } from '../utils/dateUtils';

export const useWeatherData = () => {
  const { location, error: locationError } = useGeolocation(); // 위치 정보를 가져오는 훅
  const [gridCoords, setGridCoords] = useState<{ x: number; y: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location) {
      try {
        const { lat, lon } = location;
        const coords = convertToGrid(lat, lon); // 위도, 경도를 격자 좌표로 변환
        setGridCoords(coords);
      } catch (e) {
        setError('격자 좌표 변환 중 오류가 발생했습니다.');
      }
    }
  }, [location]);

  // 현재 날짜와 변환된 격자 좌표로 날씨 데이터를 가져옴
  const currentDate = getCurrentDate();
  const weatherData = useWeather(currentDate, gridCoords?.x ?? null, gridCoords?.y ?? null);

  return {
    weatherData,
    locationError,
    error,
    isLoading: !weatherData.length && !locationError && !error,
  };
};
