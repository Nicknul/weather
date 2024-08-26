import React from 'react';

interface SelectBoxProps {
  options?: string[];
  onChange?: (value: string) => void;
  label?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options = [], onChange = () => {}, label }) => {
  const selectId = label ? label.replace(/\s+/g, '-').toLowerCase() : 'select-box';

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={selectId} className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="block w-24 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
        onChange={(e) => onChange!(e.target.value)}
      >
        <option>지역을 선택하세요</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
