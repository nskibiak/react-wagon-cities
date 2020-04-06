import React, { Component } from 'react';
import ActiveCity from '../containers/active_city';
import CityList from '../containers/city_list';
import cities from '../data/cities';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList cities={cities} />
        <ActiveCity city={cities[6]} />
      </div>
    );
  }
}

export default App;
