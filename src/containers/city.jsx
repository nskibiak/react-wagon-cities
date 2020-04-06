import React, { Component } from 'react';

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

export default City;
