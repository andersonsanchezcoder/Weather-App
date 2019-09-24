import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Location = ({ city }) =>(
  // Destructuring, using props
  // let { city } = props;
  <div className="locationWrapper">
    <h1>{city}</h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired
}

export default Location;