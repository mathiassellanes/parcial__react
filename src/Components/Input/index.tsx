import { FC } from "react";

import './style.scss'

interface InputProps {
  label?: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string,
  disabled?: boolean
  title: string
}

const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  title
}) => {

  return (
    <label className="input">
      {label && label}
      <input
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="input__field"
      />
    </label>

  )
}

export default Input;
