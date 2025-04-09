import React from 'react';
import { motion as m } from 'framer-motion'; // Framer Motion is used here for smooth fade-in animation
import './WeatherCard.css'; // Import external CSS for styling the weather card

// This component receives 'data' prop containing weather info and displays it
const WeatherCard = ({ data }) => {
  // Destructure necessary values from the weather API response
  const { name, main, weather, wind } = data;

  return (
    <m.div
      className="weather-card"
      initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and slight vertical offset
      animate={{ opacity: 1, y: 0 }}  // Animate to visible and aligned position
      transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth transition effect
    >
      {/* City name at the top */}
      <h2 className="weather-name">{name}</h2>

      {/* Weather icon provided by OpenWeatherMap */}
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} // Use higher resolution icon
        alt={weather[0].description}
        className="weather-icon"
      />

      {/* Current temperature rounded to nearest integer */}
      <p className="weather-temp">{Math.round(main.temp)}°C</p>

      {/* Description of current weather, e.g., "clear sky", "rain" */}
      <p className="weather-description">{weather[0].description}</p>

      {/* Additional details like humidity and wind speed */}
      <div className="weather-details">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} km/h</span>
      </div>
    </m.div>
  );
};

export default WeatherCard;
