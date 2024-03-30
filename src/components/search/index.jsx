import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import cityData from '../../data/city.json'

const Search = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [query, setQuery] = useState('')

  const filteredCity =
    query.length > 2
      ? cityData.filter(city => {
          return city.c_name.toLowerCase().includes(query.toLowerCase())
        })
      : []
  return (
    <>
      <Combobox as="div" className="search-container" value={selectedCity} onChange={setSelectedCity}>
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
          {filteredCity.length > 0 ? (
            filteredCity.map(city => (
              <Combobox.Option as="Fragment" key={city.c_id} value={city.c_name}>
                {({ active }) => (
                  <li className={`background-gray-500 text-gray-100 search-item text-md ${active ? 'background-gray-600' : ''}`}>
                    {city.c_name}
                  </li>
                )}
              </Combobox.Option>
            ))
          ) : (
            <li className="background-gray-500 text-gray-100 search-item text-md">No result found</li>
          )}
        </Combobox.Options>
      </Combobox>
    </>
  )
}
export default Search
