// hooks/useWeather.ts
import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

export const useWeather = (date: string) => {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(date, 67, 100);
      setWeatherData(data);
    };
    fetchWeather();
  }, [date]);

  return weatherData;
};
