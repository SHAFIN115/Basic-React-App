import React, { useState } from 'react';
import './App.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = 'c43666a92e23a0ae4ea557a271cbaa31'; // Replace with your actual API key

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
      <div className="container">
          <h1>Weather App</h1>
          <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="inputField"
          />
          <button onClick={fetchWeatherData} className="button">
              Get Weather
          </button>
          {weatherData && (
              <div style={{ marginTop: '20px' }}>
                  <h2>{weatherData.name}</h2>
                  <p>{weatherData.weather[0].description}</p>
                  <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
                  <p>{`FOR_TESTING_MERGE_CONFLICTS: ${weatherData.main.temp}°C`}</p>
                  <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
              </div>
          )}
      </div>
  );
};

export default Weather;