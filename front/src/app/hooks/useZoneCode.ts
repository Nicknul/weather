// src/app/hooks/useZoneCode.ts

import { useState, useEffect } from 'react';
import { fetchZoneKeys, sendZoneSelection } from '../services/zoneService';

export const useZoneCode = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedZone, setSelectedZone] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchZoneKeys();
        setOptions(data);
      } catch (error) {
        console.error('useZoneCode: Error loading zone keys:', error);
      }
    };

    loadData();
  }, []);

  const handleSelectChange = async (value: string) => {
    setSelectedZone(value);
    console.log('Selected zone:', value);

    try {
      const message = await sendZoneSelection(value);
      console.log('Response from server:', message);
    } catch (error) {
      console.error('Error sending selected zone:', error);
    }
  };

  return {
    options,
    selectedZone,
    handleSelectChange,
  };
};
