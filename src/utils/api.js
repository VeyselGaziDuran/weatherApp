// api.js

import axios from 'axios'

export const fetchWeatherData = async city => {
  try {
    const cityData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
    const coordinate = cityData.data.city.coord

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&&lang=tr&units=metric`,
    )
    return { current: cityData.data, weekly: response.data }
  } catch (error) {
    console.log('Error fetching weather data', error)
  }
}
