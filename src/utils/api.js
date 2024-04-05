// api.js

import axios from 'axios'

export const fetchWeatherData = async city => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&&lang=tr&units=metric`,
    )
    return response.data
  } catch (error) {
    console.log('Error fetching weather data', error)
  }
}
