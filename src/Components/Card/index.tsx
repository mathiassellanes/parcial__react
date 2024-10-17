import { FC } from "react"

import { useStore } from "../../store"
import { Pets } from "../../utils/types"

import './style.scss'

interface CardProps {
  pet: Pets
}

const Card: FC<CardProps> = ({ pet: {
  id,
  name,
  photo,
  age
} }) => {
  const {
    modal: {
      open,
    }
  } = useStore()

  const handleNavigate = () => {
    open(id)
  }

  return (
    <div className="pet" onClick={handleNavigate}>
      <img src={photo} className="pet__image" alt="" />
      <span>
        {`${name} - ${age}`}
      </span>
    </div>
  )
}

export default Card
