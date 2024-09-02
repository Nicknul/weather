import { useState, useEffect } from 'react';
import { fetchWeatherData } from '@/app/services/apiClient';
import { useZoneCode } from '@/app/hooks/useZoneCode'; // useZoneCode 훅을 가져옴

const WeatherButton = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [inputZone, setInputZone] = useState(''); // 사용자가 입력한 지역 코드를 상태로 관리
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]); // 필터링된 옵션을 관리
  const { options } = useZoneCode(); // useZoneCode 훅을 사용

  // 사용자가 입력할 때마다 필터링된 결과를 업데이트
  useEffect(() => {
    if (inputZone) {
      const filtered = options.filter(
        (option) => option.toLowerCase().includes(inputZone.toLowerCase()) // 입력된 값과 옵션을 소문자로 비교
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]); // 입력이 없으면 필터링된 옵션을 초기화
    }
  }, [inputZone, options]);

  const handleZoneChange = async (selectedZone: string) => {
    try {
      const data = await fetchWeatherData(selectedZone); // 선택한 zone 값을 전달
      setWeatherData(data);
    } catch (error) {
      console.error('프론트: 날씨 데이터를 가져오는 중 에러 발생:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="zoneInput" className="block text-sm font-medium text-gray-700">
          나의 위치 코드
        </label>
        <input
          id="zoneInput"
          type="text"
          value={inputZone}
          onChange={(e) => setInputZone(e.target.value)} // 입력된 값을 상태에 저장
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="지역 이름을 입력하세요"
        />
        {filteredOptions.length > 0 && (
          <ul className="bg-white border border-gray-300 mt-2 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setInputZone(option); // 클릭한 옵션을 인풋에 채워줌
                  handleZoneChange(option); // 클릭한 옵션으로 날씨 데이터를 가져옴
                }}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
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
