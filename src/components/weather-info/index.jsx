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
            <div>
              <span>
                {weatherData?.current.city.name}, {weatherData?.current.city.country}
              </span>
              <span>{formatDateTime(weatherData.current.list[0].dt_txt)}</span>
            </div>
            <div>
              <span>{weatherData?.weekly.current.temp.toFixed(0)}°C</span>
              <div>
                <span>
                  {weatherData?.weekly.daily[0].temp.min.toFixed(0)}°C / {weatherData?.weekly.daily[0].temp.max.toFixed(0)}°C{' '}
                </span>
                <span></span>
              </div>
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
