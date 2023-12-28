import "./current-weather.css"

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
	<p className="city">Accra</p>
	<p className="weather-description">Sunny</p>
	<img alt="weather" className="weather-icon" src="icons/01d.png"/>
      </div>
    </div>
  );
}

export default CurrentWeather;
