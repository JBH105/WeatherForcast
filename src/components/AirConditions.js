import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const AirConditionsContainer = styled.div`
  background: #1e2a47;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 500px;
`;

const DetailText = styled.p`
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AirConditions = ({ weather }) => {
  const { main, wind } = weather;

  return (
    <AirConditionsContainer>
      <h2>AIR CONDITIONS</h2>
      <DetailText>
        <span>
          <FontAwesomeIcon icon={faTemperatureHigh} /> Real Feel
        </span>
        <span>{main.feels_like} °C</span>
      </DetailText>
      <DetailText>
        <span>
          <FontAwesomeIcon icon={faWind} /> Wind
        </span>
        <span>{wind.speed} m/s</span>
      </DetailText>
      <DetailText>
        <span>
          <FontAwesomeIcon icon={faTint} /> Humidity
        </span>
        <span>{main.humidity} %</span>
      </DetailText>
    </AirConditionsContainer>
  );
};

export default AirConditions;
