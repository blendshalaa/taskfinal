import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import './multiselect.css'; // Import the CSS file

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
  isLoading?: boolean;
  defaultValue?: Option[];
  onChange?: (selected: Option[]) => void;
  isDisabled?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = 'Select items...',
  isLoading = false,
  defaultValue = [],
  onChange,
  isDisabled = false,
}) => {
  const [selected, setSelected] = useState<Option[]>(defaultValue);

  const handleOnChange = (newValue: MultiValue<Option>) => {
    const newSelected = Array.isArray(newValue) ? newValue : [];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        placeholder={placeholder}
        value={selected}
        onChange={handleOnChange}
        isDisabled={isDisabled}
        isLoading={isLoading}
        className="basic-multi-select"
        classNamePrefix="select"
        loadingMessage={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="select__loading-indicator" />
            <span>Loading...</span>
          </div>
        )}
      />
    </div>
  );
};