import React, { Component } from 'react';

class City extends Component {

  handleClick = (city) => {
    this.props.pickCity(city);
  }

  render() {

    const city = this.props.city;
    const selectedFlat = this.props.selectedFlat;

    return (
      <div className="list-group-item" onClick={(event) => {this.handleClick({city})}}>{city.name}</div>
    )
  }
};

export default City;
