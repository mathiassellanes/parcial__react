import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useStore } from "../../store"
import { Pets } from "../../utils/types"
import { deletePet, getPet } from "../../api"
import Button from "../Button"

import './style.scss'

const Modal = () => {
  const { modal, removePet } = useStore()
  const navigate = useNavigate();

  const [pet, setPet] = useState<Pets>()

  const handlePet = async () => {
    const pet = await getPet(modal.petId)

    setPet(pet)
  }

  const handleEdit = () => {
    navigate(`/pet/${modal.petId}`)

    modal.close()
  }

  useEffect(() => {
    handlePet();
  }, [modal.petId])

  const adoptPet = async () => {
    await deletePet(pet!.id);

    removePet(pet!.id)

    modal.close()
  }

  const closeModal = () => {
    modal.close()
  }

  return (
    <div className={`modal ${modal.isOpen ? 'modal--open' : ''}`}>
      {
        modal.isOpen && pet && (
          <div className="modal__container">
            <div className="modal__header">
              <h2>Detalle de {pet.name}</h2>
              <Button
                onClick={handleEdit}
                text="Editar"
                className=""
              />
            </div>
            <div className="modal__details">
              <div className="modal__details__image__container">
                <img className="modal__details__image" src={pet.photo} />
                <span className="modal__details__image__age">{pet.age}</span>
              </div>
              <h2>Descripción y Caracteristicas</h2>
              <div className="chip__container">
                {
                  pet?.characteristics?.map((char) => (
                    <div className="chip">
                      {char}
                    </div>
                  ))
                }
              </div>
              <span>
                {pet.description}
              </span>
              <div className="modal__buttons">
                <Button
                  text="Cerrar"
                  onClick={closeModal}
                  className="button--danger"
                />
                <Button
                  text="Adoptar"
                  onClick={adoptPet}
                  className=""
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Modal
