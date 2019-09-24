import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const WeatherExtraInfo = ({ humidity, wind}) =>(
  <div className="weatherExtraInfoWrapper">
    <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
    <span className="extraInfoText">{`Vientos: ${wind}`}</span></div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;