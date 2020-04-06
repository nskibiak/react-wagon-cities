import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render() {
    return(
      <ul className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </ul>
    )
  };
};

export default CityList;
