import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pickCity } from '../actions'

class City extends Component {

  handleClick = (city) => {
    this.props.pickCity(city);
  }

  render() {

    const city = this.props.city;
    const selectedCity = this.props.selectedCity;

    return (
      <div className={(city === selectedCity) ? "list-group-item selected" : "list-group-item" } onClick={(event) => {this.handleClick({city})}}>{city.name}</div>
    )
  }
};

  function mapReduxStateToProps(state) {
    return {
      selectedCity: state.selectedCity
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { pickCity: pickCity},
      dispatch
    );
  }


export default connect(mapReduxStateToProps, mapDispatchToProps)(City);

