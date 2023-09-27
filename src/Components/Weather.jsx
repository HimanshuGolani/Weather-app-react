import React, { useEffect, useState } from "react";
import "../Css/Weather.css";
import Footer from "./Footer";
import Centerr from "./Centerr";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  function getWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=45b795f4ae844140990105604231708&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let MT = Math.round(data.current.temp_c);
        let FL = Math.round(data.current.feelslike_c);
        console.log(MT);
        console.log(FL);
        const weather = {
          temperature: MT,
          feelsLike: FL,
          humidity: data.current.humidity,
          wind: data.current.wind_kph,
          icon: data.current.condition.icon,
        };

        setWeatherInfo(weather);
      })

      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="navigation">
        <input
          className="search"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter Location"
        />
        <button className="btn" onClick={getWeather}>
          Submit
        </button>
      </div>
      {weatherInfo && (
        <div>
          <Centerr
            city={city}
            temperature={weatherInfo.temperature}
            srcUrl={weatherInfo.icon}
          />
          <Footer
            feelsLike={weatherInfo.feelsLike}
            humidity={weatherInfo.humidity}
            wind={weatherInfo.wind}
          />
        </div>
      )}
    </>
  );
};

export default Weather;
