import { FC } from "react";

import './styles.scss'

type Option = {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  defaultValue: string;
  value: string
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean
}

const Select: FC<SelectProps> = ({
  label,
  options,
  defaultValue,
  value,
  onChange,
  name,
  disabled
}) => {
  return (
    <label className="select">
      {label && label}
      <select
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        className="select__field"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

export default Select;
