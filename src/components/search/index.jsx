import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import cityData from '../../data/city.json'
import { useWeather } from '../../store/weather-store'
import { fetchWeatherData } from '../../utils/api'
import Spinner from '../../icons/phosphor-icons/spinner'

const Search = () => {
  const [isPending, setIsPending] = useState(false)
  const { setWeatherData } = useWeather()
  const [selectedCity, setSelectedCity] = useState('')
  const [query, setQuery] = useState('')

  const handleSelectCity = async city => {
    setIsPending(true)
    setSelectedCity(city)
    const cityData = await fetchWeatherData(city)
    setWeatherData(cityData)
    setIsPending(false)
  }

  const filteredCity =
    query.length > 2
      ? cityData.filter(city => {
          return city.c_name.toLowerCase().includes(query.toLowerCase())
        })
      : []
  return (
    <>
      <Combobox as="div" className="search-container" value={selectedCity} onChange={city => handleSelectCity(city)}>
        <div className="city-input background-gray-600 spinner-container">
          <Combobox.Input
            disabled={isPending}
            className="text-md text-gray-400"
            placeholder="Search location"
            onChange={event => setQuery(event.target.value)}
          />
          <label htmlFor="city-input" className="sr-only">
            City
          </label>
          {isPending ? <Spinner className="spinner" /> : null}
        </div>
        <Combobox.Options className="search-item-container">
          {query.length >= 3 ? (
            filteredCity.length > 0 ? (
              filteredCity.map(city => (
                <Combobox.Option as="div" key={city.c_id} value={city.c_name}>
                  {({ active }) => (
                    <li className={`background-gray-500 text-gray-100 search-item text-md ${active ? 'background-gray-600' : ''}`}>
                      {city.c_name}
                    </li>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <li className="background-gray-500 text-gray-100 search-item text-md">No result found</li>
            )
          ) : (
            <li className="background-gray-500 text-gray-100 search-item text-md">Please enter at least 3 characters</li>
          )}
        </Combobox.Options>
      </Combobox>
    </>
  )
}
export default Search
