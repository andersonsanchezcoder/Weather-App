import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from '../../../constants/weathers'
import './styles.scss';

const icons = {
  [CLOUD]: "cloud",
  [THUNDER]: "day-thunderstorm",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [DRIZZLE]: "day-showers"
};

const sizeIcon = '4x';

const getWeatherIcon = weatherState =>{
  const icon = icons[weatherState]
  if (icon){
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
  }else{
    return <WeatherIcons className="wicon" name='day-sunny' size={sizeIcon}/>
  }
}

const WeatherTemperature = ({ temperature, weatherState }) =>(
  <div className="weatherTemperatureWrapper">
    <span className="icon-wrapper">{getWeatherIcon(weatherState)}</span>
    <span className="temperature">{`${temperature}`}</span> 
    <span className="temperatureType">{`C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;