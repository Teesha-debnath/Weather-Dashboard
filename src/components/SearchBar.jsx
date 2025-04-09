import React from 'react';
import './SearchBar.css'; // Import styling specific to the search bar

// Reusable SearchBar component with input field and search button
const SearchBar = ({ city, setCity, onSearch }) => {
  
  // Trigger search when the user presses Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-container">
      {/* Input field for entering city name */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city state as user types
        onKeyDown={handleKeyPress} // Allow search on Enter key
        placeholder="Search city"
        className="search-input"
      />

      {/* Search button triggers weather fetch */}
      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
