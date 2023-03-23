import { useState, useEffect } from 'react';

const Temp = () => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=f4c02ebe2ba943fd42e8da0be774d68c';

  const [weather1, setWeather] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setWeather({
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          currentTemp: data.main.temp,
          description: data.weather[0].description,
          feelsLike: data.main.feels_like,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          city: data.name,
          country: data.sys.country
        })
      );
  }, []);

  return (
    <>
      {weather1 && (
        <>
          <div className="city-country-container">
            <div className="city">{weather1.city}</div>

            <div className="country">{weather1.country}</div>
          </div>
          <div className="dateToday">
            Today's date is: {new Date().toLocaleDateString()}
          </div>

          <div className="current-time-container">
            <div className="current-time">
              {Math.floor(weather1.currentTemp - (273.15).toFixed(1))}
              <span>&deg;</span>
              <div>{weather1.description}</div>
            </div>
          </div>
          <div className="container">
            <div className="max-temp">
              <div className="desc">Max Temp</div>
              <div>
                {Math.floor(weather1.maxTemp - (273.15).toFixed(1))}
                <span>&deg;</span>
              </div>
              <div>Max</div>
            </div>
            <div className="min-temp">
              <div className="desc">Min Temp</div>
              <div>
                {Math.floor(weather1.minTemp - (273.15).toFixed(1))}
                <span>&deg;</span>
              </div>
              <div>Min</div>
            </div>
          </div>
          <div className="last-container">
            <div className="humidity">
              HUMIDITY
              <div>
                {Math.floor(weather1.humidity - (273.15).toFixed(1))}
                <span>&deg;</span>
                <p>HIGH</p>
                <p>LOW</p>
              </div>
            </div>

            <div className="right">
              <div className="feels-like">
                <div className="desc">FEELS LIKE</div>
                <div>
                  {Math.floor(weather1.feelsLike - (273.15).toFixed(1))}{' '}
                  <span>&deg;</span>
                </div>
              </div>
              <div className="pressure">
                <div className="desc">PRESSURE</div>
                <div>
                  {Math.floor(weather1.pressure - (273.15).toFixed(1))}{' '}
                  <span> hPa</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Temp;
