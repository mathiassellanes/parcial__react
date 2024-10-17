import { FC } from "react";

import './style.scss'

interface TextAreaProps {
  label: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string,
  disabled?: boolean
  title: string
}

const TextArea: FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  title
}) => {

  return (
    <label className="textarea">
      {label}
      <textarea
        title={title}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="textarea__field"
      />
    </label>

  )
}

export default TextArea;
