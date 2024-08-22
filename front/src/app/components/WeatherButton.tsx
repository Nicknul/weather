import { useState } from 'react';
import { fetchWeatherData } from '../services/apiClient';

const WeatherButton = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const handleClick = async () => {
    try {
      const data = await fetchWeatherData();
      setWeatherData(data);
    } catch (error) {
      console.error('프론트: 날씨 데이터를 가져오는 중 에러 발생:', error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      >
        날씨 데이터 가져오기
      </button>
      <div className="mt-4">
        {weatherData.length > 0 && (
          <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
            {weatherData.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>지역 코드:</strong> {item.regId}
                <br />
                <strong>최고 기온:</strong> {item.taMax3}°C
                <br />
                <strong>최저 기온:</strong> {item.taMin3}°C
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeatherButton;
