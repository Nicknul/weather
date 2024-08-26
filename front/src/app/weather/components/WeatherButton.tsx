import { useState, useEffect } from 'react';
import { fetchWeatherData } from '@/app/services/apiClient';
import { useZoneCode } from '@/app/hooks/useZoneCode'; // useZoneCode 훅을 가져옴
import SelectBox from '@/modules/SelectBox';

const WeatherButton = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const { options } = useZoneCode(); // useZoneCode 훅을 사용

  const handleZoneChange = async (selectedZone: string) => {
    try {
      const data = await fetchWeatherData(selectedZone); // 선택한 zone 값을 전달
      setWeatherData(data);
    } catch (error) {
      console.error('프론트: 날씨 데이터를 가져오는 중 에러 발생:', error);
    }
  };

  useEffect(() => {
    // 지역이 선택되었을 때 handleZoneChange를 호출하여 날씨 데이터를 가져옴
    if (options.length > 0) {
      handleZoneChange(options[0]); // 초기값으로 첫 번째 옵션 사용 (선택적으로)
    }
  }, [options]);

  return (
    <div className="p-4">
      <SelectBox
        options={options}
        onChange={handleZoneChange} // 선택한 지역이 바뀌면 handleZoneChange 호출
        label="지역 코드를 선택하세요"
      />
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
