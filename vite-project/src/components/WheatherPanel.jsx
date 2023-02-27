import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
function WheatherPanel() {
  let urlWheater =
    "https://api.openweathermap.org/data/2.5/weather?appid=c65c1bdda8901f487cf984086355d07c&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=c65c1bdda8901f487cf984086355d07c&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //weather
    urlWheater = urlWheater + cityUrl + loc;
    await fetch(urlWheater)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    //Forecast

    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };
  return (
    <React.Fragment>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        Wheather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
}

export default WheatherPanel;