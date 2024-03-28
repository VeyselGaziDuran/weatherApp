import React, { useState } from 'react';
import { fetchWeatherData } from '../../utils/api';

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className="weather-container">
      <div className="city-input background-gray-600">
        <input
          type="text"
          className="text-md text-gray-400"
          id="city-input"
          placeholder="Search location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchWeather}>Get Weather</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          {/* Diğer hava durumu verilerini burada gösterebilirsiniz */}
        </div>
      )}
    </div>
  );
};

export default WeatherData;
