import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeather } from "./utils/fetchWeather";
import { fetchForecast } from "./utils/fetchForecast";

import "./App.css";
import lightImg from "./assets/img1.jpeg";
import darkImg from "./assets/img5.jpeg";

const App = () => {
  const [city, setCity] = useState("");                     // City entered by the user
  const [weatherData, setWeatherData] = useState(null);     // Stores current weather info
  const [forecastData, setForecastData] = useState([]);     // Stores 5-day forecast info
  const [loading, setLoading] = useState(false);            // Loading spinner toggle
  const [error, setError] = useState("");                   // Error message for invalid cities
  const [history, setHistory] = useState([]);               // Stores last 5 searched cities
  const [theme, setTheme] = useState("light");              // Current theme (light/dark)

  // Triggered when user clicks 'Search' or 'Refresh'
  const handleSearch = async () => {
    if (!city.trim()) return;                               // Prevent blank search

    setLoading(true);                                       // Show loader
    setError("");                                           // Reset any previous errors
    setWeatherData(null);                                   // Clear previous weather
    setForecastData([]);                                    // Clear previous forecast

    try {
      const current = await fetchWeather(city);             // Fetch current weather
      const forecast = await fetchForecast(city);           // Fetch 5-day forecast

      setWeatherData(current);
      setForecastData(forecast);

      console.log("Forecast Data:", forecast);              // Debug log

      // Update search history (unique + latest 5)
      setHistory((prev) => {
        const updated = [city, ...prev.filter((c) => c.toLowerCase() !== city.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError("City not found. Try a valid name.");        // Show error if city is invalid
    } finally {
      setLoading(false);                                    // Hide loader after all
    }
  };

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Change background image based on selected theme
  const backgroundImage = theme === "light" ? lightImg : darkImg;

  return (
    <div
      className={`app-container ${theme}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT PANEL — Weather + Forecast */}
      <section className="left-panel">
        {weatherData ? (
          <div>
            {/* Current Weather Display */}
            <WeatherCard data={weatherData} />

            {/* Forecast Cards Grid */}
            {forecastData.length > 0 && (
              <div className="forecast-container">
                {forecastData.map((item, index) => (
                  <ForecastCard
                    key={index}
                    day={item.day}
                    icon={item.icon}
                    temp={item.temp}
                    description={item.description}
                    style={{ animationDelay: `${index * 0.1}s` }} // Apply staggered animation
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Show prompt if no search yet
          <div className="welcome-text">
            <p>Start by searching a city</p>
          </div>
        )}
      </section>

      {/* RIGHT PANEL — Controls, Theme Toggle, Recent History */}
      <section className="right-panel">
        {/* Theme toggle button (sun/moon icon) */}
        <div className="theme-icon" onClick={toggleTheme}>
          {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
        </div>

        {/* Input field for city search */}
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

        {/* Refresh Button — re-fetches weather for current city */}
        {weatherData && (
          <button className="refresh-btn" onClick={handleSearch}>
            Refresh Weather
          </button>
        )}

        {/* Show loader while fetching data */}
        {loading && <Loader />}

        {/* Show error message if any */}
        {error && <ErrorMessage message={error} />}

        {/* Recent Searches List */}
        {history.length > 0 && (
          <div className="recent-history">
            <h4>Recent Searches</h4>
            <ul>
              {history.map((item, index) => (
                <li key={index} onClick={() => setCity(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
