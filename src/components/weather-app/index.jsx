import React from 'react'
import WeatherData from '../weather-data/index'

const WeatherApp = () => {
  return (
    <main className="home-container">
      <figure className="img-container">
        <img src="/assets/logo/logo-lg.png" alt="Weather Logo" className="logo"></img>
      </figure>
      <div className="content">
        <div className="text-bold text-lg text-gray-100 text-center-wrap">
          Welcome To <span className="text-blue-light">TypeWeather</span>
        </div>
        <div className="text-gray-200 text-sm text-center-wrap">Choose a location to see the weather forecast</div>
        {/* WeatherData bileşenini ekleyin */}
        <WeatherData />
      </div>
    </main>
  )
}

export default WeatherApp
