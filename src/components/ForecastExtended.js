import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import transformForecast from '../services/transformForecast';
import './styles.scss';

// const days = [
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes'
// ];

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal'
// }

export const apiKey = '5edfb3eba2968736894da6693a2e0b94'
export const baseURL = 'http://api.openweathermap.org/data/2.5/forecast';


class ForecastExtended extends Component {

  constructor(){
    super();
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount(){
    const urlForecast = `${baseURL}?q=${this.props.city}&APPID=${apiKey}`
    fetch(urlForecast)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      const forecastData = transformForecast(data);
      this.setState({ forecastData });
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderForecastItemDays(forecastData){
    return forecastData.map((forecast)=>
      (<ForecastItem 
        weekDay={forecast.weekDay}
        key={`${forecast.weekDay}${forecast.hour}`}
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>))
  }

  renderProgress = () => {
    return <h3>Cargando pronóstico extendido</h3>
  }

  render(){
    const { city } = this.props;
    const { forecastData } = this.state;
    return(<div>
            <h2 className="forecast-title">Pronóstico extendido para: {city} </h2>
            { forecastData ? 
              this.renderForecastItemDays(forecastData) : 
              this.renderProgress() }
          </div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended;