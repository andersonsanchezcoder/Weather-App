import convert from 'convert-units';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from '../constants/weathers'

const getTemp = kelvin =>{
  return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weather =>{
  const { id } = weather;
  if (id < 300){
    return THUNDER;
  }else if (id < 400){
    return DRIZZLE;
  }else if (id < 600){
    return RAIN;
  }else if (id < 700){
    return SNOW;
  }else if (id < 800){
    return SUN;
  }else{
    return CLOUD;
  }
}

const transformWeather = (data) => {
  return {
    city: data.name,
    data: {
        humidity: data.main.humidity,
        temperature: getTemp(data.main.temp),
        wind: `${data.wind.speed} m/s`,
        weatherState: getWeatherState(data.weather[0])
    }
  };
}

export default transformWeather;