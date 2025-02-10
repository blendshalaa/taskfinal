import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
    options: { value: string; label: string }[]; 
    placeholder?: string; 
    isLoading?: boolean; 
    defaultValue?: { value: string; label: string }[]; 
    onChange?: (selected: { value: string; label: string }[]) => void; 
    isDisabled?: boolean; 
  }

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = 'Select items...',
  isLoading = false,
  defaultValue = [],
  onChange,
}) => {
  const [selected, setSelected] = useState<Option[]>(defaultValue);

  const handleOnChange = (newValue: MultiValue<Option>) => {
    const newSelected = Array.isArray(newValue) ? newValue : [];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Select
          isMulti
          options={options}
          placeholder={placeholder}
          value={selected}
          onChange={handleOnChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      )}
    </div>
  );
};