import React from 'react';
import '../styles/weather.css';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
  // Format date and time
  const now = new Date();
  const dateString = now.toLocaleDateString(undefined, { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const timeString = now.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Determine background based on temperature
  const getBackgroundClass = () => {
    const temp = main.temp;
    if (temp < 0) return 'freezing';
    if (temp < 10) return 'cold';
    if (temp < 20) return 'cool';
    if (temp < 30) return 'warm';
    return 'hot';
  };

  return (
    <div className={`weather-container ${getBackgroundClass()}`}>
      <div className="location-time">
        <div className="location">
          <h2>{name}, {sys.country}</h2>
          <p>{dateString}</p>
        </div>
        <div className="time">
          <p>{timeString}</p>
        </div>
      </div>
      
      <div className="current-weather">
        <div className="temperature-display">
          <div className="main-temp">{Math.round(main.temp)}°C</div>
          <p className="feels-like">Feels like: {Math.round(main.feels_like)}°C</p>
        </div>
        <div className="weather-condition">
          <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
          <p className="description">{weather[0].description}</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-label">Humidity</div>
          <div className="detail-value">{main.humidity}%</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label">Wind</div>
          <div className="detail-value">{wind.speed} m/s</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label">Pressure</div>
          <div className="detail-value">{main.pressure} hPa</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label">Range</div>
          <div className="detail-value">
            {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;