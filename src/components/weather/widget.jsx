import { useState } from "react";

import { Intro } from "./intro";
import { Cities } from "./cities";
import { Weather } from "./weather";

const apiKey = "---";

export const WeatherWidget = () => {
  const [location, setLocation] = useState("--N/A--");
  const [temp, setTemp] = useState(0);
  const [status, setStatus] = useState("--N/A--");

  const update = async (value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    setLocation(data.name);
    setTemp(data.main.temp);
    setStatus(data.weather[0].description);
  };

  return (
    <section className="my-3">
      <Intro />
      <Cities notify={update} />
      <Weather location={location} temp={temp} status={status} />
    </section>
  );
};
