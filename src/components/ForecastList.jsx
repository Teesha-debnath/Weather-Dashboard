// ForecastList.jsx
import React from "react";
import ForecastCard from "./ForecastCard";
import "./ForecastCard.css"; // optional if using separate styles

const ForecastList = ({ data }) => {
  return (
    <div className="forecast-list">
      {data.map((item, index) => (
        <ForecastCard
          key={index}
          day={item.day}
          icon={item.icon}
          temp={item.temp}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ForecastList;
