import axios from "axios";

// Get the API key from environment variables
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


// Fetch current weather data for a given city
const fetchWeather = async (city) => {
  if (!city) throw "Enter a city name.";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    const msg = err.response?.data?.message || "Error fetching weather.";
    throw msg;
  }
};

// Fetch 5-day / 3-hour interval forecast data
const fetchForecast = async (city) => {
  if (!city) throw "Enter a city name.";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    const msg = err.response?.data?.message || "Error fetching forecast.";
    throw msg;
  }
};

// Export both functions to be used in App.jsx
export { fetchWeather, fetchForecast };
