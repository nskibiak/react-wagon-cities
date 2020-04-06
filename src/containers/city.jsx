import React, { Component } from 'react';

class City extends Component {

  handleClick = () => {
    console.log("it's working");
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</div>
    )
  }
};

export default City;
