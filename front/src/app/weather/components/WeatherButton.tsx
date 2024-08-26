import { useState, useEffect } from 'react';
import { fetchWeatherData } from '@/app/services/apiClient';

const WeatherButton = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [zone, setZone] = useState<string>(''); // 지역 코드를 위한 상태 추가
  const [zones, setZones] = useState<string[]>([]); // 셀렉트 박스에 표시될 지역 코드 목록

  useEffect(() => {
    // 셀렉트 박스에 표시될 지역 코드 목록을 설정 (예시)
    setZones(['서울', '부산', '대구', '인천']); // 실제 지역 코드 목록으로 대체
  }, []);

  const handleZoneChange = async (selectedZone: string) => {
    setZone(selectedZone);
    try {
      const data = await fetchWeatherData(selectedZone); // 선택한 zone 값을 전달
      setWeatherData(data);
    } catch (error) {
      console.error('프론트: 날씨 데이터를 가져오는 중 에러 발생:', error);
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="zoneSelect" className="block text-gray-700 text-sm font-bold mb-2">
        지역 코드를 선택하세요:
      </label>
      <select
        id="zoneSelect"
        value={zone}
        onChange={(e) => handleZoneChange(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      >
        <option value="">지역을 선택하세요</option>
        {zones.map((zoneOption, index) => (
          <option key={index} value={zoneOption}>
            {zoneOption}
          </option>
        ))}
      </select>
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
