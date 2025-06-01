import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard.jsx';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '22ca8510d332a16ed656ff7ce348c1b2';
  
  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      
      if (response.status === 200) {
        setWeatherData(response.data);
      }
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Report</h1>
      
      <form onSubmit={fetchWeather} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          aria-label="City name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading weather data...</p>}
      {error && <p className="error">{error}</p>}
      
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default Weather;