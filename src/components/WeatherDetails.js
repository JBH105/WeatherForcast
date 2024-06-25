import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSun, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';

const DetailsContainer = styled.div`
  background: #1e2a47;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const WeatherIcon = styled.div`
  margin: 10px 0;
`;

const DetailText = styled.p`
  margin: 2px 0;
`;

const WeatherDetails = ({ weather }) => {
  const { main, weather: weatherInfo, wind, dt_txt } = weather;
  const icon = getWeatherIcon(weatherInfo[0].main);
  const date = new Date(dt_txt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = new Date(dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <DetailsContainer>
      <h2>WEATHER DETAILS</h2>
      <p>{date}</p>
      <p>{time}</p>
      <WeatherIcon>
        <FontAwesomeIcon icon={icon} size="3x" />
      </WeatherIcon>
      <DetailText>{main.temp} °C</DetailText>
      <DetailText>{weatherInfo[0].description}</DetailText>
      <DetailText>Wind: {wind.speed} m/s</DetailText>
      <DetailText>Humidity: {main.humidity} %</DetailText>
    </DetailsContainer>
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

export default WeatherDetails;
