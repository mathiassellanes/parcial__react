import { FC } from "react"

import './styles.scss'

interface ButtonProps {
  onClick: () => void
  className: string
  disabled?: boolean
  text: string
}

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  disabled,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {
        text
      }
    </button>
  )
}

export default Button
