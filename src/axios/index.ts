import axios from 'axios';

export const openweatherAPI = axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const weatherbitAPI = axios.create({
  baseURL: process.env.REACT_APP_WEATHERBIT_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const openweatherGeoAPI = axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_GEO_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const ipAPI = axios.create({
  baseURL: process.env.REACT_APP_IP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

weatherbitAPI.interceptors.request.use((config) => {
  config.url = `${config.url}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`;
  return config;
});

openweatherAPI.interceptors.request.use((config) => {
  config.url = `${config.url}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  return config;
});

openweatherGeoAPI.interceptors.request.use((config) => {
  config.url = `${config.url}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
  return config;
});
