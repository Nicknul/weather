// hooks/useWeather.ts
import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

export const useWeather = (date: string, nx: number | null, ny: number | null) => {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (nx !== null && ny !== null) {
        const data = await getWeatherData(date, nx, ny);
        setWeatherData(data);
      }
    };
    fetchWeather();
  }, [date, nx, ny]);

  return weatherData;
};
