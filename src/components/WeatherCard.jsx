import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
<div className="container">
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt={weather[0].description} />
        <div>
          <p className="temperature">{Math.round(main.temp)}°C</p>
          <p className="description">{weather[0].description}</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div>
          <span>Feels Like</span>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div>
          <span>Humidity</span>
          <span>{main.humidity}%</span>
        </div>
        <div>
          <span>Wind</span>
          <span>{wind.speed} m/s</span>
        </div>
        <div>
          <span>Pressure</span>
          <span>{main.pressure} hPa</span>
        </div>
      </div>
    </div></div>
  );
};

export default WeatherCard;