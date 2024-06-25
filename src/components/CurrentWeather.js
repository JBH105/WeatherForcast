import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSun, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';

const CurrentWeatherContainer = styled.div`
  background: #1e2a47;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 500px;
`;

const WeatherIcon = styled.div`
  margin: 10px 0;
`;

const DetailText = styled.p`
  margin: 2px 0;
`;

const CurrentWeather = ({ weather }) => {
  const { main, weather: weatherInfo, wind, name } = weather;
  const icon = getWeatherIcon(weatherInfo[0].main);
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <CurrentWeatherContainer>
      <h2>CURRENT WEATHER</h2>
      <h3>{name}</h3>
      <p>{date}</p>
      <WeatherIcon>
        <FontAwesomeIcon icon={icon} size="3x" />
      </WeatherIcon>
      <DetailText>{main.temp} °C</DetailText>
      <DetailText>{weatherInfo[0].description}</DetailText>
    </CurrentWeatherContainer>
  );
};

const getWeatherIcon = (main) => {
  switch (main) {
    case 'Clouds':
      return faCloud;
    case 'Rain':
      return faCloudRain;
    case 'Clear':
      return faSun;
    case 'Snow':
      return faSnowflake;
    default:
      return faCloudSun;
  }
};

export default CurrentWeather;
