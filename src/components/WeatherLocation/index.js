import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherBycity from '../../services/getUrlWeatherByCity';
import './styles.scss'


class WeatherLocation extends Component  {

  constructor(props){
    console.log('constructor');
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
  }


  componentDidMount() {
    console.log('cargando');
    this.updateData();
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  updateData = () => {
    fetch(getUrlWeatherBycity(this.state.city))
    .then(response => response.json())
    .then(data => {
      const functionalData = transformWeather(data);
      this.setState({
        city: functionalData.city,
        data: functionalData.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    const { onWeatherLocationClick } = this.props

    console.log('render');
    const { city, data } = this.state;
    return(  
      <div className = "weatherLocationWrapper" onClick = {onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data = {data}></WeatherData> : <CircularProgress color = {"secondary"} size = {50}/>}
      </div>
    );
  }
}

WeatherLocation.propTypes = { 
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
 }

export default WeatherLocation;