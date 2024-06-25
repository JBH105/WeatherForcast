import React from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';

const WeatherListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const WeatherList = ({ weatherData, onCardClick }) => {
  return (
    <WeatherListContainer>
      {weatherData.slice(0, 5).map((weather, index) => (
        <WeatherCard key={index} weather={weather} onClick={() => onCardClick(weather)} />
      ))}
    </WeatherListContainer>
  );
};

export default WeatherList;
