import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    let image = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`

    return(
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <p>{this.props.city.address}</p>
        <img src={image} alt=""/>
      </div>
    )
  };
};

export default ActiveCity;
