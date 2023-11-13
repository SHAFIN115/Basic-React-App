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
      <img src={logo} alt="Weather Logo" className="logo" />
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Longitude"
        className="inputField"
      />
      <input
        type="text"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="Latitude"
        className="inputField"
      />
      <button onClick={fetchWeatherData} className="button">
        Get Weather
      </button>
      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weatherData.name}</h2>
          <p>{`Latitude: ${weatherData.coord.lat}`}</p>
          <p>{`Longitude: ${weatherData.coord.lon}`}</p>
          <p>{`Weather: ${weatherData.weather[0].main} - ${weatherData.weather[0].description}`}</p>
          <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
          <p>{`Feels Like: ${weatherData.main.feels_like}°C`}</p>
          <p>{`Min Temperature: ${weatherData.main.temp_min}°C`}</p>
          <p>{`Max Temperature: ${weatherData.main.temp_max}°C`}</p>
          <p>{`Pressure: ${weatherData.main.pressure} hPa`}</p>
          <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
          <p>{`Visibility: ${weatherData.visibility} meters`}</p>
          <p>{`Wind Speed: ${weatherData.wind.speed} m/s`}</p>
          <p>{`FOR TESTING MERGE AND OTHERS CONFLICTS: ${weatherData.wind.speed} m/s`}</p>
          <p>{`Wind Direction: ${weatherData.wind.deg}°`}</p>
          <p>{`Rainfall (1h): ${weatherData.rain ? weatherData.rain['1h'] : 0} mm`}</p>
          <p>{`Cloudiness: ${weatherData.clouds.all}%`}</p>
          <p>{`Sunrise: ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}`}</p>
          <p>{`Sunset: ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}`}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;