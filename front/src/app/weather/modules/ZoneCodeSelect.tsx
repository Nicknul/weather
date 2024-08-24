// src/app/modules/ZoneCodeSelect.tsx (React 컴포넌트)

import React, { useState, useEffect } from 'react';

const ZoneCodeSelect: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/zone/keys');
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching zone keys:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (value: string) => {
    console.log('Selected zone:', value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="zoneCodeSelect" className="block text-gray-700 text-sm font-bold mb-2">
        지역 코드 선택
      </label>
      <select
        id="zoneCodeSelect"
        className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ZoneCodeSelect;
