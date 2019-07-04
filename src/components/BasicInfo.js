import React, { useEffect, useState } from 'react';
import '../styles/BasicInfo.scss';
import 'weather-icons/css/weather-icons.min.css';

import Moment from 'react-moment';
import axios from 'axios';

const API_KEY = 'de97e92c2b5a89dee6b9ddcb13352eec';
const CITY = '18042';

function BasicInfo({ position = 'top right' }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${CITY}&APPID=${API_KEY}`
      )
      .then(({ data }) => setWeather(data));
  }, []);
  return (
    <div className="basicInfo" style={{ textAlign: position }}>
      <span className="date">
        <Moment format="dddd, MMM. Do" />
      </span>
      <span className="time">
        <Moment interval={1000} format="h:mm:ss A" />
      </span>
      <span className="weather">
        <i class={`wi wi-owm-${weather && weather.cod}`} />
        <span className="weather-desc">
          {weather && weather.weather[0].main}
        </span>
      </span>
    </div>
  );
}

export default BasicInfo;
