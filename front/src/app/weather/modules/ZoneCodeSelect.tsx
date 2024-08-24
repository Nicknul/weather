// src/app/modules/ZoneCodeSelect.tsx

import React, { useState, useEffect } from 'react';
import SelectBox from '@/modules/SelectBodx';
import { fetchZoneKeys } from '@/app/services/zoneService';

const ZoneCodeSelect: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchZoneKeys();
        setOptions(data);
      } catch (error) {
        console.error('ZoneCodeSelect: Error loading zone keys:', error);
      } finally {
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
      }
    };

    loadData();
  }, []);

  const handleSelectChange = (value: string) => {
    console.log('Selected zone:', value);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // 로딩 중일 때 표시할 요소
      ) : (
        <SelectBox options={options} onChange={handleSelectChange} label="지역 코드 선택" />
      )}
    </div>
  );
};

export default ZoneCodeSelect;
