import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSun, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background: #1e2a47;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  width: 120px;
`;

const WeatherIcon = styled.div`
  margin: 10px 0;
`;

const DetailText = styled.p`
  margin: 2px 0;
`;

const WeatherCard = ({ weather, onClick }) => {
  const { main, weather: weatherInfo } = weather;
  const icon = getWeatherIcon(weatherInfo[0].main);
  const date = new Date(weather.dt * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card onClick={onClick}>
      <WeatherIcon>
        <FontAwesomeIcon icon={icon} size="2x" />
      </WeatherIcon>
      <DetailText>{date}</DetailText>
      <DetailText>{main.temp} °C</DetailText>
      <DetailText>{weatherInfo[0].description}</DetailText>
    </Card>
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

export default WeatherCard;
