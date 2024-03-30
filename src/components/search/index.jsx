import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan']

const Search = () => {
  const [selectedPerson, setSelectedPerson] = useState('')
  const [query, setQuery] = useState('')

  const filteredPeople =
    query.length > 2
      ? people.filter(person => {
          return person.toLowerCase().includes(query.toLowerCase())
        })
      : ['Please enter at least 3 characters']
  return (
    <>
      <Combobox as="div" className="search-container" value={selectedPerson} onChange={setSelectedPerson}>
        <div className="city-input background-gray-600">
          <Combobox.Input
            className="text-md text-gray-400"
            placeholder="Search location"
            onChange={event => setQuery(event.target.value)}
          />
          <label htmlFor="city-input" className="sr-only">
            City
          </label>
        </div>
        <Combobox.Options className="search-item-container">
          {filteredPeople.map(person => (
            <Combobox.Option className="background-gray-500 text-gray-100 search-item text-md" key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </>
  )
}
export default Search
