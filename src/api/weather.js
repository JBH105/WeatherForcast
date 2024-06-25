import axios from 'axios';

const API_KEY = 'cd34f692e856e493bd936095b256b337';

export const fetchWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};

export const fetchCurrentWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};
