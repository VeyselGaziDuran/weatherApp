// api.js

import axios from 'axios'

const API_KEY = import.meta.env.REACT_APP_OPENWEATHERMAP_API_KEY
export const fetchWeatherData = async city => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    return response.data
  } catch (error) {
    throw Error('Error fetching weather data')
  }
}
