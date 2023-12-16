import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ ready: false });
   const [city, setCity] = useState(props.defaultCity);
 
  function handleWeather(response) {
    setWeatherData({
      ready: true,
      data: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
     let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
     let city = "Kyev";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Weather">
          <form onSumbit={handleSubmit}>
            <div className="row mt-2">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search for city"
                  onChange={updateCity}
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} city={city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
