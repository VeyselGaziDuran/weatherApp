import axios from 'axios'
import { weeklyData } from './weekly-data'

export const fetchWeatherData = async city => {
  try {
    const cityData = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    )

    const weekly = weeklyData(cityData.data.list)
    return {
      current: cityData.data,
      weekly: weekly,
    }
  } catch (error) {
    console.log('Error fetching weather data', error)
  }
}
