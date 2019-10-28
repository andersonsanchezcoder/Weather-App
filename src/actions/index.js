import transformForecast from '../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const apiKey = '5edfb3eba2968736894da6693a2e0b94'
export const baseURL = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
  return dispatch => {
    const urlForecast = `${baseURL}?q=${payload}&APPID=${apiKey}`

    // activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    return fetch(urlForecast)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      const forecastData = transformForecast(data);

      // Modificar el estado con el resultado de la promise
      dispatch(setForecastData({city: payload, forecastData }))
    })
    .catch(error => {
      console.log(error);
    });
  };
};
