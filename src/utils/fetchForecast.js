const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export const fetchForecast = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();

  if (data.cod !== "200") {
    throw new Error("Forecast fetch failed");
  }

  // Reduce to one forecast per day (e.g. 12:00 PM)
  const dailyForecast = [];
  const addedDates = new Set();

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    const time = item.dt_txt.split(" ")[1];

    if (time === "12:00:00" && !addedDates.has(date)) {
      dailyForecast.push({
        day: new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        icon: item.weather[0].icon,
        temp: Math.round(item.main.temp),
        description: item.weather[0].description,
      });
      addedDates.add(date);
    }
  });

  return dailyForecast.slice(0, 5); // Limit to 5 days
};
