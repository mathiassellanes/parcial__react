import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Pets, PetsWithoutId } from "../../utils/types"
import { getPet, updatePet as updatePetApi, createPet } from "../../api"
import Input from "../../Components/Input"
import Select from "../../Components/Select"
import TextArea from "../../Components/TextArea"
import PropertyAdder from "../../Components/PropertyAdder"
import Button from "../../Components/Button"
import { useStore } from "../../store"
import { edadOptions } from "../../utils/constants"

import './styles.scss'

const AddPet = () => {
  const defaultFormValue: PetsWithoutId = {
    name: '',
    age: '',
    characteristics: [],
    description: '',
    photo: '',
    type: ''
  }

  const {
    updatePet,
    addPet
  } = useStore()

  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PetsWithoutId | Pets>(defaultFormValue)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.title]: e.target.value
    })
  }

  const handlePet = async () => {
    if (params.id) {
      const pet = await getPet(params.id!)

      setFormData(pet)
    }
  }

  useEffect(() => {
    handlePet();
  }, [])

  const saveChanges = async () => {
    if (params.id) {
      const updatedPet = await updatePetApi(params.id, formData as Pets)

      updatePet(updatedPet)
    } else {
      const createdPet = await createPet(formData as PetsWithoutId)

      addPet(createdPet)
    }

    navigate('/')
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="addpet">
      <div className="addpet__go-back">
        <Button
          text="Volver"
          className=""
          onClick={goHome}
        />
      </div>
      <div className="input-group">
        <Input
          label="Nombre"
          onChange={handleChange}
          title="name"
          value={formData.name}
          placeholder="Nombre"
        />
        <Select
          label="Edad"
          options={edadOptions}
          name="age"
          defaultValue={formData.age}
          value={formData.age}
          onChange={(event) => {
            setFormData((prev) => ({
              ...prev,
              age: event.target.value
            }))
          }}
        />
      </div>

      <div className="input-group">
        <Input
          value={formData.type}
          onChange={handleChange}
          title="type"
          label="Tipo"
          placeholder="Tipo"
        />
        <Input
          value={formData.photo}
          title="photo"
          label="Imagen URL"
          placeholder="https://imagenurl.img"
          onChange={handleChange}
        />
        {
          formData.photo && (
            < img className="photo__preview" src={formData.photo} />
          )
        }
      </div>

      <PropertyAdder
        options={formData.characteristics}
        label="Caracteristicas (MAX 3)"
        onChange={(newChars) => {
          setFormData((prev) => ({
            ...prev,
            characteristics: newChars
          }))
        }}
      />

      <TextArea
        value={formData.description}
        title="description"
        label="Descripción"
        placeholder="Descripción"
        onChange={handleChange}
      />

      <Button
        className="button--primary"
        onClick={saveChanges}
        text="Guardar"
      />

    </div>
  )
}

export default AddPet;
