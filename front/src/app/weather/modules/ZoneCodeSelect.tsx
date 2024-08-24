import React, { useState, useEffect } from 'react';
import SelectBox from '@/modules/SelectBodx';
import { fetchZoneKeys } from '@/app/services/zoneService';

const ZoneCodeSelect: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchZoneKeys();
        setOptions(data);
      } catch (error) {
        console.error('ZoneCodeSelect: Error loading zone keys:', error);
      }
    };

    loadData();
  }, []);

  const handleSelectChange = (value: string) => {
    console.log('Selected zone:', value);
  };

  return <SelectBox options={options} onChange={handleSelectChange} label="지역 코드 선택" />;
};

export default ZoneCodeSelect;
