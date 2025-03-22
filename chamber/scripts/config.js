const LAT = "-22.9035";
const LON = "-43.2096";
const APIKEY = "f86c4af78286393a0e8190f1181f3309";

const WEATHER_URL_STUB = "./data/weather.json";
const WEATHER_URL_PROD = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const FORECAST_URL_PROD = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const apiURL = WEATHER_URL_PROD;
const apiForecastURL = FORECAST_URL_PROD;

const DIRECTORY_DATA_URL_PROD = "<PRODUCTION_URL_HERE>";
const DIRECTORY_DATA_URL_STUB = "./data/business.json";
const DIRECTORY_DATA_URL_TEST = "http://127.0.0.1:8000/data/all";

const businessDataUrl = DIRECTORY_DATA_URL_STUB;
