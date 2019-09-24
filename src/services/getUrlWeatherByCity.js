import {baseURL, apiKey} from '../constants/api_url'

const getUrlWeatherBycity = (city) =>{
  return `${baseURL}?q=${city}&APPID=${apiKey}`;
}

export default getUrlWeatherBycity;