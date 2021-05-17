import axios from 'axios';
const API_KEY = '7fe6a7710c61d16d39d6129fae28a516';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},in`;
  const response = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: response.data
  };
}
