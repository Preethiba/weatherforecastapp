import axios from 'axios';
const API_KEY = '7fe6a7710c61d16d39d6129fae28a516';

const ROOT_URL = 'http://';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const response = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: response
  };
}
