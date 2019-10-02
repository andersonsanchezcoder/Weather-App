import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.scss';

const LocationList = ({ cities, onSelectedLocation }) =>{

  const handleWeatherLocationclick = city =>{
    onSelectedLocation(city);
  };

  const strToComponents = cities => (
    cities.map(city =>
      (
        <WeatherLocation 
          key = {city} 
          city = {city}  
          onWeatherLocationClick={ ()=> handleWeatherLocationclick(city) }/>))
  );

  return(
        <div className="locationList">
          {strToComponents(cities)}
        </div>)
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList