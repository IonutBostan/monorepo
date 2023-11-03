import { useEffect, useState } from 'react'
import './App.css'

interface Pet {
  images: string[]
  name: string
  city: string
  breed: string
  animal: string
}

const animals = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Reptile']

const App = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('dog')
  const [breeds, setBreeds] = useState([])
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch(`http://pets-v2.dev-apis.com/breeds?animal=${selectedAnimal}`).then(
      res => {
        res.json().then(json => {
          setBreeds(json.breeds)
        })
      },
    )
  }, [selectedAnimal])

  useEffect(() => {
    const localLocation = ''
    const localBreed = ''
    fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${selectedAnimal}&location=${localLocation}&breed=${localBreed}`,
    ).then(res => {
      res.json().then(json => {
        setPets(json.pets)
      })
    })
  }, [selectedAnimal])

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnimal(e.target.value)
  }

  return (
    <div className="w-full h-full">
      <h1 className="mb-4">Adopt Me</h1>
      <div className="mx-10">
        <form className="bg-slate-100 shadow-md p-4 max-w-xs">
          <div className="pb-4">
            <div>Location</div>
            <input className="w-full" placeholder="Location" type="text" />
          </div>
          <div className="pb-4">
            <div>Animal</div>
            <select
              className="w-full"
              onChange={onChangeHandler}
              value={selectedAnimal}
            >
              {animals.map(animal => (
                <option key={animal} value={animal.toLowerCase()}>
                  {animal}
                </option>
              ))}
            </select>
          </div>
          <div className="pb-4">
            <div>
              <span className="capitalize">{selectedAnimal}</span> breed
            </div>
            <select className="w-full">
              {breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full text-center">
            <button className="bg-red-300" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      {pets.map((pet: Pet) => (
        <div>
          <img
            alt={pet.name}
            className="rounded w-24 h-24"
            src={pet.images[0]}
          />
          <div className="info">
            <h1>{pet.name}</h1>
            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}`}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
