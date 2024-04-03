import { useWeather } from '../../store/weather-store'
import { useEffect } from 'react'


const WeatherInfo = () => {
    const { weatherData } = useWeather()
    useEffect(() => {
        console.log(weatherData)
    }, [weatherData])
  return <div>WeatherInfo</div>
}
export default WeatherInfo
