import { createContext, useContext, useState } from 'react'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)

  return <WeatherContext.Provider value={{ weatherData, setWeatherData }}>{children}</WeatherContext.Provider>
}

export const useWeather = () => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider')
  }
  return context
}
