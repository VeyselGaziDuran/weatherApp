import { useWeather } from '../../store/weather-store'
import { useEffect } from 'react'

const WeatherInfo = () => {
  const { weatherData } = useWeather()
  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])
  return (
    <section>
      <div className="background-gray-800 card-wrapper">sssss</div>
      <div className="background-gray-800 card-wrapper"></div>
      <div className="background-gray-800 card-wrapper"></div>
    </section>
  )
}
export default WeatherInfo
