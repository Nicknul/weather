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
        className="block w-full mb-4 p-2 border rounded"
        onChange={(e) => onChange!(e.target.value)}
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

export default SelectBox;
