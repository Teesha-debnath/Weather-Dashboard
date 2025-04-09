import React from 'react';
import './ErrorMessage.css'; // Styling specific to error message display

// Component to display an error message to the user
// This handles cases like invalid city name or API failure
const ErrorMessage = ({ message }) => {
  return (
    // The message is passed as a prop and shown inside a styled div
    <div className="error-message">
      {message}
    </div>
  );
};

export default ErrorMessage;
