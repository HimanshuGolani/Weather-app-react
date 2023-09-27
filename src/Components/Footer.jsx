import React from "react";
import "../Css/Footer.css";

const Footer = ({ feelsLike, humidity, wind }) => {
  return (
    <>
      <div className="details-display">
        <div className="feels-like">
          <h4>{feelsLike}°C</h4>
          <h4>Feels-Like</h4>
        </div>
        <div className="humidity">
          <h4>{humidity}%</h4>
          <h4>Humidity</h4>
        </div>
        <div className="wind-speed">
          <h4>{wind} Km/h</h4>
          <h4>Wind Speed</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
