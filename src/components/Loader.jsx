import React from 'react';
import './Loader.css'; // Styling for loader text or animation

// Simple loader component shown while weather data is being fetched
const Loader = () => {
  return (
    // Display basic loading message — can be styled or animated with CSS
    <p className="loader-text">Loading weather...</p>
  );
};

export default Loader;
