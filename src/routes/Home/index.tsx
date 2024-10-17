import { useEffect, useMemo, useState } from 'react'
import './style.scss'
import { useStore } from '../../store'
import { getPets } from '../../api'
import Card from '../../Components/Card'
import Modal from '../../Components/Modal'
import Button from '../../Components/Button'
import Select from '../../Components/Select'

import { edadOptions, typeOptions } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

type filter = {
  age: string
  type: string
}

const Home = () => {
  const { pets, setPets } = useStore()

  const navigate = useNavigate();

  const navigateAdd = () => {
    navigate('/pet')
  }

  const [filters, setFilters] = useState<filter>({
    age: '',
    type: ''
  })

  const handlePets = async () => {
    const response = await getPets()

    setPets(response)
  }

  useEffect(() => {
    handlePets()
  }, [])

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => (filters.age ? pet.age === filters.age : true) && (filters.type ? pet.type === filters.type : true))
  }, [filters, pets])

  return (
    <div className='home'>
      <div className='home__header'>
        <h2>ADOPTA-ME</h2>
        <div className='home__header--filters'>
          <Select
            options={edadOptions}
            defaultValue={edadOptions[0].value}
            name='age'
            onChange={(e) => setFilters((prev) => ({
              ...prev,
              age: e.target.value
            }))}
            value={filters.age}
          />
           <Select
            options={typeOptions}
            defaultValue={typeOptions[0].value}
            name='type'
            onChange={(e) => setFilters((prev) => ({
              ...prev,
              type: e.target.value
            }))}
            value={filters.type}
          />
        </div>
      </div>
      <div className='home__add'>
        <Button
          text="Agregar Mascota"
          className="button--primary"
          onClick={navigateAdd}
        />
      </div>
      <div className='home__pets'>
        {
          filteredPets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))
        }
      </div>
      <Modal />

    </div>
  )
}

export default Home
