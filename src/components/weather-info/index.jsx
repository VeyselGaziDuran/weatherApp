import { useWeather } from '../../store/weather-store'
import { useEffect } from 'react'
import formatDateTime from '../../utils/format-date'

const WeatherInfo = () => {
  const { weatherData } = useWeather()
  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])
  return (
    <>
      {weatherData && (
        <section className="background-gray-100 ">
          <div className="background-gray-800 card-wrapper">
            <img src={`assets/bg-img/${weatherData.current.list[0].weather[0].icon}.png`} alt="bg-img" />
            <div>
              <span className="text-gray-100 heading-sm">
                {weatherData?.current.city.name}, {weatherData?.current.city.country}
              </span>
              <span className="text-gray-100 text-xs">{formatDateTime(weatherData.current.list[0].dt_txt)}</span>
            </div>
            <div>
              <span className="text-gray-100 heading-xl">{weatherData.weekly.current.temp.toFixed(0)}°C</span>
              <div>
                <span className="text-gray-100 heading-sm">
                  {weatherData.weekly.daily[0].temp.min.toFixed(0)}°C / {weatherData?.weekly.daily[0].temp.max.toFixed(0)}°C{' '}
                </span>
                <span className="text-gray-100 text-sm">{weatherData.weekly.current.weather[0].main}</span>
              </div>
              <img src={`assets/weather-icons/${weatherData.current.list[0].weather[0].icon}.png`} alt="dynamic-img" />
            </div>
          </div>

          <div className="background-gray-800 card-wrapper"></div>
          <div className="background-gray-800 card-wrapper"></div>
        </section>
      )}
    </>
  )
}
export default WeatherInfo
