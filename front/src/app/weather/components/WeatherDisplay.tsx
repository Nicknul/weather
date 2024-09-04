// components/WeatherDisplay.tsx
import React from 'react';
import WeatherDay from './WeatherDay';
import WeatherHour from './WeatherHour';

const WeatherDisplay = ({ weatherData }: { weatherData: any[] }) => {
  const today = weatherData.filter((item) => item.fcstDate === getCurrentDate());
  const tomorrow = weatherData.filter((item) => item.fcstDate === getTomorrowDate());

  return (
    <div>
      <WeatherDay data={today} />
      <WeatherHour data={today} />

      <WeatherDay data={tomorrow} />
    </div>
  );
};

const getCurrentDate = () => {
  const now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let date = now.getDate().toString().padStart(2, '0');
  return `${year}${month}${date}`;
};

const getTomorrowDate = () => {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let date = now.getDate().toString().padStart(2, '0');
  return `${year}${month}${date}`;
};

export default WeatherDisplay;
