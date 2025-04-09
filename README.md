🌤️ Weather Dashboard
A modern and responsive weather application built with React.js and Vite, powered by the OpenWeatherMap API, allowing users to search for real-time weather updates and 5-day forecasts.

dark mode: <img width="959" alt="Sss1" src="https://github.com/user-attachments/assets/f4f67006-9d37-47c7-bce3-b6d79158761c" />
light mode: <img width="959" alt="ss2" src="https://github.com/user-attachments/assets/e78a0045-a29d-4851-8755-bf666512d68b" />

🛠️ Technologies Used
React.js – Frontend Framework
Vite – Fast build tool for React
CSS – Custom dark/light theme styling

✨ Features
🌍 Search any city to get real-time weather data
🌡️ Live weather info with temperature, humidity, wind, and icon
📆 5-Day Forecast using OpenWeatherMap’s 5-day/3-hour API
🌘 Dark / Light theme toggle with background transitions
🔄 Refresh button to re-fetch weather data
🕘 Recent Searches (Last 5 cities stored)
⚡ Loading animation while data is fetched
❗ User-friendly error messages
📱 Fully responsive on mobile, tablet, and desktop
🎨 Glassmorphism UI Design for a modern look

📸 UI Overview
Left Panel: Weather card and 5-day forecast
Right Panel: Search bar, theme toggle, refresh button, recent searches
OpenWeatherMap API – For real-time weather and forecast data
Framer Motion / CSS Animations – For smooth UI transitions
Vercel – For deployment

🔧 Getting Started
1. Clone the repository
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   
2. Install Dependencies
   npm install
   
3. VITE_WEATHER_API_KEY=your_openweathermap_api_key
   📌 Get your free API key from OpenWeatherMap

4. Run Development server
   npm run dev
   
5. Build for production
   npm run build

6. Preview the Production Build
   npm run preview

🌐 Deployment (Vercel)
Initial setup: vercel
Choose the correct directory (./)
Project name: weather-dashboard
Framework: Vite (auto-detected)
Output directory: dist
Confirm and deploy!
Once done, your app will be live at:
https://weather-dashboard-[unique-id].vercel.app

📂 Project Structure
weather-dashboard/
├── public/
├── src/
│   ├── assets/               # Background images
│   ├── components/           # Reusable components (SearchBar, WeatherCard, etc.)
│   ├── utils/                # API functions (fetchWeather, fetchForecast)
│   ├── App.jsx               # Root component
│   ├── App.css               # Styling
├── .env                      # API Key (Not pushed to GitHub)
├── vercel.json               # Deployment config
└── README.md

🤝 Acknowledgements
1. OpenWeatherMap
2. Vercel
3. React Icons
4. Framer Motion

🧑‍💻 Author
Teesha Debnath
