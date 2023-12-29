import "./current-weather.css"

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
	<div>
	  <p className="city">Accra</p>
	  <p className="weather-description">Sunny</p>
	</div>
	<img alt="weather" className="weather-icon" src="icons/01d.png"/>
      </div>
      <div className="bottom">
	<p className="temperature">24°C</p>
	<div className="details">
	    <div className="parameter-row">
	         <span className="parameter-details">Details</span>
	    </div>
	    <div className="parameter-row">
                 <span className="parameter-details">feels like</span>
	         <span className="parameter-value">26°C</span>
            </div>
	    <div className="parameter-row">
                 <span className="parameter-details">Wind</span>
                 <span className="parameter-value">5 m/s</span>
            </div>
	    <div className="parameter-row">
                 <span className="parameter-details">Humidity</span>
                 <span className="parameter-value">20%</span>
            </div>
	    <div className="parameter-row">
                 <span className="parameter-details">Pressure</span>
                 <span className="parameter-value">20 hPa</span>
            </div>
	</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
