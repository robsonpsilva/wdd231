// select HTML elements in the document
const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");
const weatherTemp = document.querySelector("#temperature");
const weatherWind = document.querySelector("#windspeed");
const highTemperature = document.querySelector("#highTemperature");
const lowTemperature = document.querySelector("#lowTemperature");
const humidityOut = document.querySelector("#humidity");
const sunriseOut = document.querySelector("#sunriseout")
const sunsetOut = document.querySelector("#sunsetout")
const forecastOut = document.querySelector("#todayforecast");
const tomorrowOut = document.querySelector("#tommorowforecast");
const day_after_tomorrowOut = document.querySelector("#day_after_tommorowforecast");


function displayResults(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  const desc = weatherData.weather[0].description;
  const main = weatherData.weather[0].main;

  const high_temperature = weatherData.main.temp_max.toFixed(0);
  const low_temperature = weatherData.main.temp_min.toFixed(0);
  const humidity = weatherData.main.humidity.toFixed(0);

  const options = { hour: 'numeric', minute: 'numeric', hour12: true }; // hour12 habilita AM/PM
  
  const sun_rise_date = new Date(weatherData.sys.sunrise * 1000).toLocaleString('en-US', options);
  const sun_set_date = new Date(weatherData.sys.sunset * 1000).toLocaleString('en-US', options);

  const sunrise = `${sun_rise_date}`;
  const sunset = `${sun_set_date}`;
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDesc.textContent = main; 
  weatherTemp.textContent = weatherData.main.temp.toFixed(0);
  weatherWind.textContent = weatherData.wind.speed.toFixed(0);
  highTemperature.textContent = high_temperature;
  lowTemperature.textContent = low_temperature;
  humidityOut.textContent = `${humidity}%`;
  sunriseOut.textContent = sunrise;
  sunsetOut.textContent = sunset;
  forecastOut.textContent =  weatherData.main.temp.toFixed(0);
}

function displayForecast(weatherData){
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let day = weatherData.list[0];
  let weekday = day.dt;
  let date = new Date(weekday * 1000);
  let dayOfWeek = daysOfWeek[date.getUTCDay()];

  forecastOut.textContent =  `${day.main.temp}`;
  const additionalText = document.createTextNode(`${dayOfWeek}: `);
  forecastOut.parentNode.insertBefore(additionalText, forecastOut);
  day = weatherData.list[1];
  tomorrowOut.textContent = `${day.main.temp}`;
  day = weatherData.list[2];
  day_after_tomorrowOut.textContent = `${day.main.temp}`;

}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(apiForecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


getTheWeather();
getForecast();