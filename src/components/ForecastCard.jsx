import React from "react";

// Reusable card for individual forecast data
const ForecastCard = ({ day, icon, temp, description }) => {
  return (
    <div className="forecast-card">
      <div className="forecast-day">{day}</div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="forecast-icon"
      />
      <div className="forecast-temp">{temp}°C</div>
      <div className="forecast-description">{description}</div>
    </div>
  );
};

export default ForecastCard;
