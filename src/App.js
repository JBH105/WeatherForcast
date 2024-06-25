import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchWeather, fetchCurrentWeather } from './api/weather';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import AirConditions from './components/AirConditions';
import WeatherList from './components/WeatherList';
import WeeklyForecast from './components/WeeklyForecast';
import WeatherDetails from './components/WeatherDetails';
import Modal from './components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #0c1c4e;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city);
      setWeatherData(data.list);
      const currentData = await fetchCurrentWeather(city);
      setCurrentWeather(currentData);
      setSelectedWeather(null);
    } catch (error) {
      setError('Failed to fetch weather data');
    }
    setLoading(false);
  };

  const handleCardClick = (weather) => {
    setSelectedWeather(weather);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>The Weather Forecasting</Title>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {currentWeather && <CurrentWeather weather={currentWeather} />}
          {currentWeather && <AirConditions weather={currentWeather} />}
          <WeatherList weatherData={weatherData.slice(0, 5)} onCardClick={handleCardClick} />
          {currentWeather && <WeeklyForecast weatherData={weatherData} />}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedWeather && <WeatherDetails weather={selectedWeather} />}
          </Modal>
        </>
      )}
    </Container>
  );
};

export default WeatherApp;
