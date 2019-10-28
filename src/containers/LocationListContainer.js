import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from '../actions';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

  handleSelectedLocation = city => {
    this.props.setCity(city);
  }

  render() {
    return (
      <div>
        <LocationList 
          cities = { this.props.cities }
          onSelectedLocation = { (city)=> this.handleSelectedLocation(city) }
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
