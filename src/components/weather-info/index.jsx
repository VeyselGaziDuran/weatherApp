import { useWeather } from '../../store/weather-store'
import { useEffect } from 'react'
import formatDateTime, { getDay } from '../../utils/format-date'
import CloudIcon from '../../icons/phosphor-icons/cloud'
import DropIcon from '../../icons/phosphor-icons/drop'
import ThermometerIcon from '../../icons/phosphor-icons/thermometer'
import SunIcon from '../../icons/phosphor-icons/sun'
import WindIcon from '../../icons/phosphor-icons/wind'
import { weeklyData } from '../../utils/weekly-data'

const WeatherInfo = () => {
  const { weatherData } = useWeather()
  useEffect(() => {
    if (weatherData) {
      weeklyData(weatherData.current.list)
    }
    console.log(weatherData)
  }, [weatherData])
  return (
    <>
      {weatherData && (
        <section className="weather-data-section">
          <div className="background-gray-800 card-wrapper">
            <img className="bg-img" src={`assets/bg-img/${weatherData.current.list[0].weather[0].icon}.png`} alt="bg-img" />
            <div className="overlay-content">
              <div className="city-data-wrapper">
                <span className="text-gray-100 text-md text-bold">
                  {weatherData.current.city.name}, {weatherData.current.city.country}
                </span>
                <span className="text-gray-100 text-xs">{formatDateTime(weatherData.current.list[0].dt_txt)}</span>
              </div>
              <div className="city-​​weather-info">
                <div className="city-​​weather-wrapper">
                  <span className="text-gray-100 heading-xl text-extrabold">{weatherData.current.list[0].main.temp.toFixed(0)}°C</span>
                  <div>
                    <span className="text-gray-100 heading-md text-bold">
                      {weatherData.weekly[0].min}°c / {weatherData.weekly[0].max}°c{' '}
                    </span>
                    <span className="text-gray-100 text-sm text-bold">{weatherData.current.list[0].weather[0].main}</span>
                  </div>
                </div>
                <img
                  className="city-​​weather-icon"
                  src={`assets/weather-icons/${weatherData.current.list[0].weather[0].icon}.png`}
                  alt="dynamic-img"
                />
              </div>
            </div>
          </div>

          <div className="background-gray-800 card-wrapper weather-data-list-wrapper">
            <div className='weather-data-list'>
              <ThermometerIcon />
              <span className="text-gray-200 text-bold heading-xs">Thermal sensation</span>
              <span className="text-gray-100 text-bold heading-md">{weatherData.current.list[0].main.feels_like.toFixed(0)}°c</span>
            </div>
            <div className='weather-data-list'>
              <CloudIcon />
              <span className="text-gray-200 text-bold heading-xs">Probability of rain</span>
              <span className="text-gray-100 text-bold heading-md">{weatherData.current.list[0].pop.toFixed(0)}%</span>
            </div>
            <div className='weather-data-list'>
              <WindIcon />
              <span className="text-gray-200 text-bold heading-xs">Wind speed</span>
              <span className="text-gray-100 text-bold heading-md">{weatherData.current.list[0].wind.speed.toFixed(0)} km/h</span>
            </div>
            <div className='weather-data-list'>
              <DropIcon />
              <span className="text-gray-200 text-bold heading-xs">Air humidity</span>
              <span className="text-gray-100 text-bold heading-md">{weatherData.current.list[0].main.humidity.toFixed(0)}%</span>
            </div>
            <div className='weather-data-list'>
              <SunIcon />
              <span className="text-gray-200 text-bold heading-xs">UV Index</span>
              <span className="text-gray-100 text-bold heading-md">5</span>
            </div>
          </div>
          <div className="background-gray-800 card-wrapper weekly-data">
            {weatherData.weekly.map((day, index) => (
              <div key={index} className="weekly-data-card">
                <div className="text-gray-200 text-bold text-sm">{getDay(day.date)}</div>
                <img src={`assets/weather-icons/${day.icon}.png`} alt="dynamic-img" />
                <div>
                  <span className="heading-sm text-gray-100 text-bold">{day.max}°c</span>
                  <span className="heading-sm text-gray-400 text-bold">{day.min}°c</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
export default WeatherInfo
