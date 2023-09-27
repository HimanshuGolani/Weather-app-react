import React from "react";
import "../Css/Centerr.css";
const Centerr = ({ city, temperature, srcUrl }) => {
  return (
    <>
      <div className="main-section">
        <div className="title-area">
          <div className="city-name">
            <h2>City_Name</h2>
            <p>{city}</p>
          </div>
          <div className="title">
            <h2>Temperature</h2>
            <p>{temperature}°C</p>
          </div>
          <div className="emoji">
            <img src={srcUrl} alt="weather-emoji" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Centerr;
