import React, { useState } from 'react';
import SelectBox from '../components/SelectBodx';

const ZoneCodeSelect = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    console.log('선택한 옵션:', value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">셀렉트 박스 예제</h1>
      <SelectBox
        options={['Option 1', 'Option 2', 'Option 3']}
        onChange={handleSelectChange} // onChange 속성 전달
        label="옵션 선택"
      />
      <p className="mt-4">선택한 옵션: {selectedOption}</p>
    </div>
  );
};

export default ZoneCodeSelect;
