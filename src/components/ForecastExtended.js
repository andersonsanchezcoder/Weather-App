import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {

  // constructor(props){
  //   super(props);
  //   const { city } = props;
  // }

  render(){
    const { city } = this.props;
    return(<div>Pronostico extendido para: {city}</div>);
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended;