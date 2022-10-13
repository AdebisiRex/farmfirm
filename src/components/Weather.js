import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Weather = ({ classes }) => {
  const [spinner, setspinner] = useState(true);

  const [data, setdata] = useState({});

  useEffect(() => {
    async function getWeather() {
      let location = "Lagos";
      const api_key = "dfe9122282bfdc0fcdff6b773287509b";
      const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

      const getWeather = await axios.get(weatherEndpoint);
      const weatherData = getWeather.data;
      const iconEndpoint = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

      setdata({
        image: iconEndpoint,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        weather: weatherData.weather[0].main,
        weatherDesc: weatherData.weather[0].description,
      });
      setspinner(false);
    }
    getWeather();
  }, []);
  return (
    <>
      <div className="mb-4 rounded-4 bg-light bg-gradient shadow-sm p-3 position-relative  row">
        <div className="mb-2 col-4 col-md-12">
          <h2 className="text-dark m-0  fw-bold">Weather</h2>
          <small className="text-secondary fw-light">Today's weather</small>
        </div>
        {spinner ? (
          <div className="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="col-8 col-md-12">
            <div className="row ">
              <div className="col-4 col-md-12  d-flex justify-content-center">
                <img src={data.image} alt="" width={100} />
              </div>
              <div className={classes.bottom + " col-7 col-md-12"}>
                <div className="mb-3">
                  <h4 className="text-secondary fw-bold m-0">{data.weather}</h4>
                  <small className={classes.smallText + " "}>
                    {data.weatherDesc}
                  </small>
                </div>

                <div>
                  <p className={classes.smallText + " m-0 fw-bold"}>
                    Temperature: <span className="fw-normal">{data.temp}</span>{" "}
                  </p>
                  <p className={classes.smallText + " m-0 fw-bold"}>
                    Humidity: <span className="fw-normal">{data.humidity}</span>
                  </p>
                  <p className={classes.smallText + " m-0 fw-bold"}>
                    Wind Speed:{" "}
                    <span className="fw-normal">{data.windSpeed}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
