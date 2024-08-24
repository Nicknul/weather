// src/app/modules/ZoneCodeSelect.tsx

import React from 'react';
import SelectBox from '@/modules/SelectBox';
import { useZoneCode } from '@/app/hooks/useZoneCode';

const ZoneCodeSelect: React.FC = () => {
  const { options, handleSelectChange } = useZoneCode();

  return <SelectBox options={options} onChange={handleSelectChange} label="지역 코드 선택" />;
};

export default ZoneCodeSelect;
