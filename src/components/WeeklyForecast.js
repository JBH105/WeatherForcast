import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSun, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';

const WeeklyForecastContainer = styled.div`
  background: #1e2a47;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin-top:20px;
`;

const ForecastTitle = styled.h2`
  margin-bottom: 10px;
`;

const ForecastList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ForecastItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #273b6b;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
`;

const WeatherIcon = styled.div`
  margin-right: 10px;
`;

const DetailText = styled.p`
  margin: 0;
`;

const WeeklyForecast = ({ weatherData }) => {
  const filteredData = weatherData.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <WeeklyForecastContainer>
      <ForecastTitle>WEEKLY FORECAST</ForecastTitle>
      <ForecastList>
        {filteredData.map((weather, index) => {
          const { main, weather: weatherInfo, wind, dt_txt } = weather;
          const icon = getWeatherIcon(weatherInfo[0].main);
          const date = new Date(dt_txt).toLocaleDateString('en-US', {
            weekday: 'long',
          });

          return (
            <ForecastItem key={index}>
              <DetailText>{date}</DetailText>
              <WeatherIcon>
                <FontAwesomeIcon icon={icon} size="2x" />
              </WeatherIcon>
              <DetailText>{main.temp} °C</DetailText>
              <DetailText>{weatherInfo[0].description}</DetailText>
              <DetailText>{wind.speed} m/s</DetailText>
              <DetailText>{main.humidity} %</DetailText>
            </ForecastItem>
          );
        })}
      </ForecastList>
    </WeeklyForecastContainer>
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

export default WeeklyForecast;
